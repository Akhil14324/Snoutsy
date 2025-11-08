/**
 * Universal Popup System for Snoutsy Website
 * Replaces all alert() calls with professional popups
 */

class PopupManager {
    constructor() {
        this.activePopup = null;
        this.init();
    }

    init() {
        // Create global popup container if it doesn't exist
        if (!document.getElementById('globalPopupContainer')) {
            const container = document.createElement('div');
            container.id = 'globalPopupContainer';
            document.body.appendChild(container);
        }
    }

    /**
     * Show a popup with custom content
     * @param {Object} options - Popup configuration
     * @param {string} options.title - Popup title
     * @param {string} options.message - Popup message
     * @param {string} options.type - Popup type (success, error, warning, info)
     * @param {Function} options.onConfirm - Callback for confirm button
     * @param {Function} options.onCancel - Callback for cancel button
     * @param {boolean} options.showCancel - Whether to show cancel button
     * @param {string} options.confirmText - Custom confirm button text
     * @param {string} options.cancelText - Custom cancel button text
     */
    show(options = {}) {
        // Close any existing popup
        this.close();

        const {
            title = 'Notification',
            message = '',
            type = 'info',
            onConfirm = null,
            onCancel = null,
            showCancel = false,
            confirmText = 'OK',
            cancelText = 'Cancel'
        } = options;

        const popup = this.createPopupElement(title, message, type, showCancel, confirmText, cancelText);
        document.getElementById('globalPopupContainer').appendChild(popup);

        // Store callbacks
        this.currentCallbacks = { onConfirm, onCancel };

        // Show popup with animation
        setTimeout(() => {
            popup.style.display = 'flex';
            popup.classList.add('show');
        }, 10);

        this.activePopup = popup;
    }

    /**
     * Create popup HTML element
     */
    createPopupElement(title, message, type, showCancel, confirmText, cancelText) {
        const popup = document.createElement('div');
        popup.className = `popup-overlay popup-${type}`;
        popup.innerHTML = `
            <div class="popup-content">
                <span class="close-popup" onclick="popupManager.close()">&times;</span>
                <div class="popup-icon">
                    ${this.getIconForType(type)}
                </div>
                <h3 class="popup-title">${title}</h3>
                <p class="popup-message">${message}</p>
                <div class="popup-buttons">
                    <button class="btn popup-btn popup-confirm" onclick="popupManager.handleConfirm()">
                        ${confirmText}
                    </button>
                    ${showCancel ? `
                        <button class="btn popup-btn popup-cancel" onclick="popupManager.handleCancel()">
                            ${cancelText}
                        </button>
                    ` : ''}
                </div>
            </div>
        `;

        // Add click outside to close
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                this.close();
            }
        });

        return popup;
    }

    /**
     * Get icon HTML for popup type
     */
    getIconForType(type) {
        const icons = {
            success: '<i class="fa-solid fa-check-circle"></i>',
            error: '<i class="fa-solid fa-times-circle"></i>',
            warning: '<i class="fa-solid fa-exclamation-triangle"></i>',
            info: '<i class="fa-solid fa-info-circle"></i>'
        };
        return icons[type] || icons.info;
    }

    /**
     * Handle confirm button click
     */
    handleConfirm() {
        if (this.currentCallbacks.onConfirm) {
            this.currentCallbacks.onConfirm();
        }
        this.close();
    }

    /**
     * Handle cancel button click
     */
    handleCancel() {
        if (this.currentCallbacks.onCancel) {
            this.currentCallbacks.onCancel();
        }
        this.close();
    }

    /**
     * Close active popup
     */
    close() {
        if (this.activePopup) {
            this.activePopup.classList.remove('show');
            setTimeout(() => {
                if (this.activePopup && this.activePopup.parentNode) {
                    this.activePopup.parentNode.removeChild(this.activePopup);
                }
                this.activePopup = null;
                this.currentCallbacks = null;
            }, 300);
        }
    }

    /**
     * Convenience methods for different popup types
     */
    success(title, message, onConfirm) {
        this.show({ title, message, type: 'success', onConfirm });
    }

    error(title, message, onConfirm) {
        this.show({ title, message, type: 'error', onConfirm });
    }

    warning(title, message, onConfirm, onCancel) {
        this.show({ title, message, type: 'warning', onConfirm, onCancel, showCancel: true });
    }

    info(title, message, onConfirm) {
        this.show({ title, message, type: 'info', onConfirm });
    }

    /**
     * Confirm dialog
     */
    confirm(title, message, onConfirm, onCancel) {
        this.show({
            title,
            message,
            type: 'warning',
            onConfirm,
            onCancel,
            showCancel: true,
            confirmText: 'Yes',
            cancelText: 'No'
        });
    }
}

// Create global popup manager instance
const popupManager = new PopupManager();

// Add CSS styles for popups
const popupStyles = `
    .popup-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
        z-index: 10000;
        animation: fadeIn 0.3s ease;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .popup-overlay.show {
        opacity: 1;
    }

    .popup-content {
        background: var(--white, #fff);
        border-radius: 1rem;
        padding: 3rem;
        max-width: 40rem;
        width: 90%;
        text-align: center;
        position: relative;
        animation: slideUp 0.3s ease;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        border: 0.1rem solid rgba(0, 0, 0, 0.1);
        transform: translateY(-50px);
        transition: transform 0.3s ease;
    }

    .popup-overlay.show .popup-content {
        transform: translateY(0);
    }

    .close-popup {
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        font-size: 2.5rem;
        cursor: pointer;
        color: #888;
        transition: all 0.3s ease;
        line-height: 1;
    }

    .close-popup:hover {
        color: var(--orange, #c88407);
        transform: scale(1.1);
    }

    .popup-icon {
        font-size: 4rem;
        margin-bottom: 1.5rem;
        display: block;
    }

    .popup-success .popup-icon {
        color: #28a745;
    }

    .popup-error .popup-icon {
        color: #dc3545;
    }

    .popup-warning .popup-icon {
        color: #ffc107;
    }

    .popup-info .popup-icon {
        color: #17a2b8;
    }

    .popup-title {
        color: var(--black, #1e1e1f);
        font-size: 2.2rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }

    .popup-message {
        color: var(--light-color, #666);
        font-size: 1.6rem;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    .popup-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .popup-btn {
        background: linear-gradient(135deg, var(--green, #008000), #228b22);
        color: var(--white, #fff);
        border: none;
        padding: 1rem 2.5rem;
        font-size: 1.6rem;
        border-radius: 5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
        letter-spacing: 0.5px;
        box-shadow: 0 4px 15px rgba(0, 128, 0, 0.3);
        min-width: 10rem;
    }

    .popup-btn:hover {
        background: linear-gradient(135deg, var(--orange, #c88407), #ff8c00);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(200, 132, 7, 0.4);
    }

    .popup-cancel {
        background: linear-gradient(135deg, #6c757d, #5a6268);
        box-shadow: 0 4px 15px rgba(108, 117, 125, 0.3);
    }

    .popup-cancel:hover {
        background: linear-gradient(135deg, #dc3545, #c82333);
        box-shadow: 0 6px 20px rgba(220, 53, 69, 0.4);
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    /* Responsive design */
    @media (max-width: 768px) {
        .popup-content {
            padding: 2rem;
            margin: 1rem;
        }

        .popup-title {
            font-size: 1.8rem;
        }

        .popup-message {
            font-size: 1.4rem;
        }

        .popup-buttons {
            flex-direction: column;
            align-items: center;
        }

        .popup-btn {
            width: 100%;
            max-width: 20rem;
        }
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = popupStyles;
document.head.appendChild(styleSheet);

// Override alert function globally
window.alert = function(message, title = 'Notification') {
    popupManager.info(title, message);
};

// Export for use in other scripts
window.popupManager = popupManager;