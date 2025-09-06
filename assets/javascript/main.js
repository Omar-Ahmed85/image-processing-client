import { showNotification, getImages } from './services.js';
export const host = 'https://image-processing-server-xmbxr.sevalla.app/';

/* Handling Adding Images Into Website */
const imagesContainer = document.getElementById('images-container');

async function addMainImages() {
	const images = await getImages();
	images.forEach((image) => {
		const img = document.createElement('img');

		img.setAttribute('data-name', image);
		img.src = `${host}uploads/${image}`;
		img.classList.add('image');
		img.setAttribute(
			'data-url',
			`${host}uploads/${image}`,
		);

		imagesContainer.appendChild(img);
	});
}

window.addEventListener('load', async () => {
	await addMainImages();
});

imagesContainer.addEventListener('dblclick', (e) => {
	if (e.target.classList.contains('image')) {
		window.open(`${e.target.getAttribute('data-url')}`, '_blank');
	}
});

function addNewImage(name) {
	const img = document.createElement('img');

	img.setAttribute('data-name', name);
	img.classList.add('image');
	img.src = `${host}uploads/${name}`;
	img.setAttribute(
		'data-url',
		`${host}uploads/${name}`,
	);

	imagesContainer.appendChild(img);
}

/* Handling Uploading Images */

const imageInput = document.getElementById('image-input');
imageInput.addEventListener('change', async () => {
	const image = imageInput.files[0];
	if (!image) {
		showNotification('Please, Upload an Image', 'error');
		return;
	}

	const formData = new FormData();
	formData.append('image', image);

	try {
		const response = await fetch(`${host}api/upload`, {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();
		showNotification(data.message, data.type);
		if (response.status === 200 && data.type === 'check_circle') {
			addNewImage(data.imgName);
		}
	} catch (error) {
		console.error(error);
		showNotification('Failed to Upload The Image', 'error');
	}
});

/* Handling Resizing Images */

let selectedImage = null;
imagesContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('image')) {
		imagesContainer
			.querySelectorAll('.image')
			.forEach((element) => element.removeAttribute('data-selected'));
		e.target.setAttribute('data-selected', true);
		selectedImage = e.target;
	}
});

const resizeForm = document.getElementById('resize-form');
resizeForm.addEventListener('submit', async (e) => {
	e.preventDefault();

	const widthInput = document.getElementById('width-input');
	const heightInput = document.getElementById('height-input');

	if (
		!selectedImage ||
		!widthInput.value.trim() ||
		!heightInput.value.trim()
	) {
		showNotification(
			'You Must Select An Image. Provide a Width and a Height',
			'error',
		);
		return;
	}

	try {
		const URL = `${host}api/resize?filename=${selectedImage.getAttribute('data-name')}&width=${+widthInput.value}&height=${+heightInput.value}`;

		const response = await fetch(URL, { method: 'POST' });
		const data = await response.json();

		showNotification(data.message, data.type);
		if (response.status === 200 && data.type === 'check_circle') {
			openPreview(data.imageUrl);
		}
	} catch (error) {
		console.error(error);
		showNotification('Failed To Resize The Image', 'error');
	}
});

const preview = document.getElementById('preview');
const darkness = document.getElementById('darkness');
const closeButton = document.getElementById('close-button');

function openPreview(imageUrl) {
	const img = document.createElement('img');
	const div = document.createElement('div');

	img.src = `${host}${imageUrl}`;
	img.alt = 'Resized Image';
	preview.appendChild(img);

	div.classList.add('link');
	div.innerHTML = `
		<span>${host}${imageUrl}</span>
		<span id="copy" class="material-symbols-rounded">content_copy</span>
	`;
	preview.appendChild(div);

	darkness.style.display = 'block';
	preview.style.display = 'flex';

	const copy = document.getElementById('copy');
	copy.addEventListener('click', () => {
		navigator.clipboard
			.writeText(
				`${host}${imageUrl}`,
			)
			.then(() => {
				showNotification('Copied To Clipboard', 'check_circle');
			})
			.catch((error) => {
				console.error(error);
				showNotification('Failed To Copy Content', 'error');
			});
	});

	window.addEventListener('click', (e) => {
		if (e.target.id === closeButton.id) {
			preview.style.display = 'none';
			darkness.style.display = 'none';

			img.remove();
			div.remove();
		}
	});
}
