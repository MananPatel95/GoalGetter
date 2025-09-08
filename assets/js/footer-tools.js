// Footer Tools JavaScript
// Adds interactivity to the SEO footer tools

document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to footer links
    const footerLinks = document.querySelectorAll('.footer-links-list a');
    
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Add click tracking for analytics (if needed)
    footerLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track footer link clicks
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Footer',
                    'event_label': this.textContent.trim()
                });
            }
        });
    });
    
    // Add smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only prevent default and scroll if href is not just '#'
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add loading animation for external tool links
    const toolLinks = document.querySelectorAll('.tools-section a');
    toolLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add loading state
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            // Reset after a short delay
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 300);
        });
    });
});

// Utility function to format numbers for display
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Add tooltip functionality for footer sections
// Dropdown Functionality
function toggleToolsDropdown(event) {
	event.preventDefault();
	const dropdown = event.target.closest('.tools-dropdown');
	if (!dropdown) {
		console.warn('Tools dropdown not found');
		return;
	}
	
	dropdown.classList.toggle('active');
	
	// Close resources dropdown if open
	const resourcesDropdown = document.querySelector('.resources-dropdown');
	if (resourcesDropdown && resourcesDropdown.classList.contains('active')) {
		resourcesDropdown.classList.remove('active');
	}
	
	// Position dropdown to avoid viewport cutoff
	if (dropdown.classList.contains('active')) {
		// Small delay to ensure dropdown is fully rendered
		setTimeout(() => {
			positionDropdown(dropdown);
		}, 10);
	}
}

function toggleResourcesDropdown(event) {
	event.preventDefault();
	const dropdown = event.target.closest('.resources-dropdown');
	if (!dropdown) {
		console.warn('Resources dropdown not found');
		return;
	}
	
	dropdown.classList.toggle('active');
	
	// Close tools dropdown if open
	const toolsDropdown = document.querySelector('.tools-dropdown');
	if (toolsDropdown && toolsDropdown.classList.contains('active')) {
		toolsDropdown.classList.remove('active');
	}
	
	// Position dropdown to avoid viewport cutoff
	if (dropdown.classList.contains('active')) {
		// Small delay to ensure dropdown is fully rendered
		setTimeout(() => {
			positionDropdown(dropdown);
		}, 10);
	}
}

// Position dropdown to avoid viewport cutoff
function positionDropdown(dropdown) {
	const dropdownMenu = dropdown.querySelector('.tools-dropdown-menu, .resources-dropdown-menu');
	if (!dropdownMenu) {
		console.warn('Dropdown menu not found');
		return;
	}
	
	// Get dropdown trigger and viewport dimensions
	const dropdownRect = dropdown.getBoundingClientRect();
	const menuRect = dropdownMenu.getBoundingClientRect();
	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;
	
	// Validate dimensions
	if (!dropdownRect || !menuRect || viewportWidth <= 0 || viewportHeight <= 0) {
		console.warn('Invalid dimensions for dropdown positioning');
		return;
	}
	
	// Calculate position relative to viewport (since we're using position: fixed)
	let left = dropdownRect.left;
	let top = dropdownRect.bottom + 10; // 10px gap below trigger
	
	// Check if dropdown extends beyond right edge of viewport
	if (left + menuRect.width > viewportWidth) {
		left = viewportWidth - menuRect.width - 10; // 10px margin from edge
	}
	
	// Check if dropdown extends beyond bottom edge of viewport
	if (top + menuRect.height > viewportHeight) {
		top = dropdownRect.top - menuRect.height - 10; // Position above trigger
	}
	
	// Ensure dropdown doesn't go off the left edge
	if (left < 10) {
		left = 10;
	}
	
	// On mobile, center the dropdown if it's too wide
	if (window.innerWidth <= 768) {
		left = (viewportWidth - menuRect.width) / 2;
		if (left < 10) left = 10;
	}
	
	// Apply positioning
	dropdownMenu.style.setProperty('left', `${left}px`, 'important');
	dropdownMenu.style.setProperty('top', `${top}px`, 'important');
	dropdownMenu.style.setProperty('right', 'auto', 'important');
	dropdownMenu.style.setProperty('bottom', 'auto', 'important');
	dropdownMenu.style.setProperty('transform', 'translateY(0)', 'important');
	
	// Debug logging
	console.log('Dropdown positioned:', {
		viewportWidth,
		viewportHeight,
		dropdownLeft: dropdownRect.left,
		dropdownBottom: dropdownRect.bottom,
		menuWidth: menuRect.width,
		menuHeight: menuRect.height,
		calculatedLeft: left,
		calculatedTop: top
	});
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
	const toolsDropdown = document.querySelector('.tools-dropdown');
	const resourcesDropdown = document.querySelector('.resources-dropdown');
	
	if (!toolsDropdown || !resourcesDropdown) {
		return;
	}
	
	const isClickInsideTools = toolsDropdown.contains(event.target);
	const isClickInsideResources = resourcesDropdown.contains(event.target);
	
	if (!isClickInsideTools && toolsDropdown.classList.contains('active')) {
		toolsDropdown.classList.remove('active');
	}
	
	if (!isClickInsideResources && resourcesDropdown.classList.contains('active')) {
		resourcesDropdown.classList.remove('active');
	}
});

function addTooltips() {
    const sectionTitles = document.querySelectorAll('.footer-section-title');
    
    sectionTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'footer-tooltip';
            tooltip.textContent = 'Click to explore ' + this.textContent.toLowerCase();
            tooltip.style.cssText = `
                position: absolute;
                background: #333;
                color: white;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 12px;
                z-index: 1000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - 40) + 'px';
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 10);
        });
        
        title.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.footer-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Initialize tooltips when DOM is ready
document.addEventListener('DOMContentLoaded', addTooltips);

// Reposition dropdowns on window resize
window.addEventListener('resize', function() {
	const activeToolsDropdown = document.querySelector('.tools-dropdown.active');
	const activeResourcesDropdown = document.querySelector('.resources-dropdown.active');
	
	if (activeToolsDropdown) {
		try {
			positionDropdown(activeToolsDropdown);
		} catch (error) {
			console.warn('Error repositioning tools dropdown:', error);
		}
	}
	if (activeResourcesDropdown) {
		try {
			positionDropdown(activeResourcesDropdown);
		} catch (error) {
			console.warn('Error repositioning resources dropdown:', error);
		}
	}
});
