# 🖼️ Image Processing Client

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

A modern, frontend client for the Image Processing application. Built with vanilla HTML, CSS, and JavaScript, featuring a clean UI for uploading, resizing, and managing images.

---

## 🚀 Features

- **Drag & Drop Upload**: Intuitive file upload interface
- **Real-time Preview**: Instant image preview and gallery
- **Custom Resizing**: Specify exact width and height dimensions
- **Responsive Design**: Works seamlessly across all device sizes
- **Image Gallery**: Browse and preview all uploaded images
- **Modern UI**: Clean, professional interface with smooth animations
- **File Validation**: Client-side image file type validation
- **Progress Feedback**: Visual feedback during upload and processing

---

## 📁 Project Structure

```
client/
├── assets/
│   ├── css/
│   │   ├── main.css           # Main stylesheet
│   │   ├── fonts.css          # Font definitions
│   │   └── icons.css          # Icon styles
│   ├── fonts/
│   │   ├── inter.ttf          # Inter font family
│   │   ├── productSans.ttf    # Product Sans font
│   │   ├── spaceMono.ttf      # Space Mono font
│   │   ├── spaceMonoItalic.ttf
│   │   └── urbanist.ttf       # Urbanist font
│   ├── icons/
│   │   └── rounded.ttf        # Material Icons font
│   ├── images/
│   │   └── logo.png           # Application logo
│   └── javascript/
│       ├── main.js            # Main application logic
│       └── services.js        # API service functions
├── index.html                 # Main HTML file
└── README.md
```

---

## 🛠️ Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- [Image Processing Server](https://github.com/Omar-Ahmed85/image-processing-server) running on `http://localhost:3000`

### 1. Clone the Repository

```bash
git clone <your-client-repo-url>
cd image-processing-client
```

### 2. Serve the Files

Since this is a static frontend, you can serve it using any of these methods:

#### Option A: Live Server (VS Code Extension)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Option B: Python HTTP Server
```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

#### Option C: Node.js HTTP Server
```bash
npx http-server -p 8080
```

#### Option D: Direct File Access
Simply open `index.html` in your browser (some features may be limited due to CORS)

### 3. Access the Application

Open your browser and navigate to:
- Live Server: Usually `http://127.0.0.1:5500`
- HTTP Server: `http://localhost:8080`
- Direct: `file:///path/to/index.html`

---

## 🎨 UI Components

### Upload Interface
- **Upload Container**: Drag-and-drop zone for image files
- **File Input**: Traditional file picker as fallback
- **Resize Form**: Width and height input fields with submit button

### Image Gallery
- **Grid Layout**: Responsive grid displaying all uploaded images
- **Preview Modal**: Full-size image preview on double-click
- **Image Info**: Hover effects and image metadata

### Notifications
- **Success Messages**: Confirmation of successful operations
- **Error Handling**: User-friendly error messages

---

## 🔧 Configuration

### API Endpoint Configuration
The client is configured to communicate with the server at `http://localhost:3000`. To change this:

1. Open `assets/javascript/services.js`
2. Update the base URL in the service functions
3. Ensure CORS is properly configured on the server

### Supported File Types
- JPEG (.jpg, .jpeg)

---

## 🎯 Usage

### Uploading Images
1. Click the "Upload Image" area or drag files directly
2. Select one or more image files
3. Images are automatically uploaded to the server

### Resizing Images
1. Select an image from your device
2. Enter desired width and height in pixels
3. Click "RESIZE" to process the image
4. The resized image will appear in the gallery

### Viewing Images
- **Gallery View**: All images display in a responsive grid
- **Preview Mode**: Double-click any image for full-size preview
- **Close Preview**: Click the X button or press Escape

---

## 🌐 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 60+ | ✅ Fully Supported |
| Firefox | 55+ | ✅ Fully Supported |
| Safari | 12+ | ✅ Fully Supported |
| Edge | 79+ | ✅ Fully Supported |
| IE | 11 | ⚠️ Limited Support |

---

## 🎨 Customization

### Styling
- Modify `assets/css/main.css` for layout and visual changes
- Update `assets/css/fonts.css` to change typography
- Edit `assets/css/icons.css` for icon modifications

### Functionality
- Extend `assets/javascript/main.js` for new features
- Modify `assets/javascript/services.js` for API changes
- Add new event handlers and UI interactions

---

## 🚀 Deployment

### Static Hosting Options
- **Netlify**: Drag and drop the client folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Enable in repository settings
- **AWS S3**: Upload files to S3 bucket with static hosting
- **Firebase Hosting**: Use Firebase CLI to deploy

### Build Process
No build process required - this is a vanilla JavaScript application that runs directly in the browser.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Mostafa Ahmed Mostafa**

---

## 🔗 Related

This client is designed to work with the [Image Processing Server](https://github.com/Omar-Ahmed85/image-processing-server) for a complete full-stack image processing solution.

---

## 🔮 Future Enhancements

- [ ] Batch image processing
- [ ] Image filters and effects
- [ ] User authentication
- [ ] Image metadata display
- [ ] Download processed images
- [ ] Undo/Redo functionality