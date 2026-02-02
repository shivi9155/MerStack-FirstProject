
        // State management
        let currentUser = null;
        let cart = [];
        let currentFilter = 'all';
        let currentSort = 'featured';
        let currentPage = 1;
        const productsPerPage = 8;
        
        // Complete product data
        const allProducts = [
            {
                id: 1,
                name: "Parisian Glow Foundation",
                category: "makeup",
                price: 4299,
                image: "Images/product3.jpg",
                description: "Lightweight foundation with a natural, radiant finish that lasts all day.",
                isNew: true,
                rating: 4.8
            },
            {
                id: 2,
                name: "Bloom Lipstick Collection",
                category: "makeup",
                price: 2899,
                image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
                description: "Set of 6 vibrant lipsticks with moisturizing formula and satin finish.",
                isNew: true,
                rating: 4.6
            },
            {
                id: 3,
                name: "Rose Quartz Serum",
                category: "skincare",
                price: 499,
                image: "Images/pr15.jpg",
                description: "Hydrating facial serum with rose quartz extract for glowing skin.",
                isNew: false,
                rating: 4.9
            },
            {
                id: 4,
                name: "Lavender Dream Perfume",
                category: "fragrance",
                price: 778,
                image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=744&q=80",
                description: "Elegant floral fragrance with notes of lavender, vanilla, and sandalwood.",
                isNew: true,
                rating: 4.7
            },
            {
                id: 5,
                name: "Silk Blossom Hair Mask",
                category: "haircare",
                price: 399,
                image: "Images/pr23.jpg",
                description: "Deep conditioning treatment for soft, shiny, and manageable hair.",
                isNew: false,
                rating: 4.5
            },
            {
                id: 6,
                name: "Champagne Highlighter",
                category: "makeup",
                price: 249,
                image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80",
                description: "Liquid highlighter with champagne shimmer for a radiant glow.",
                isNew: true,
                rating: 4.4
            },
            {
                id: 7,
                name: "Velvet Matte Eyeshadow Palette",
                category: "makeup",
                price: 559,
                image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                description: "12 highly pigmented matte eyeshadows in versatile neutral shades.",
                isNew: false,
                rating: 4.7
            },
            {
                id: 8,
                name: "Hyaluronic Acid Moisturizer",
                category: "skincare",
                price: 489,
                image: "Images/pr16.jpg",
                description: "Intense hydration with hyaluronic acid for plump, youthful skin.",
                isNew: false,
                rating: 4.8
            },
            {
                id: 9,
                name: "French Vanilla Body Lotion",
                category: "body",
                price: 799,
                image: "Images/pr13.jpg",
                description: "Rich, creamy body lotion with French vanilla scent for silky smooth skin.",
                isNew: true,
                rating: 4.3
            },
            {
                id: 10,
                name: "Volumizing Mascara",
                category: "makeup",
                price: 79,
                image: "Images/pr22.jpg",
                description: "Lengthening and volumizing mascara for dramatic lashes without clumping.",
                isNew: false,
                rating: 4.6
            },
            {
                id: 11,
                name: "Citrus Zest Body Wash",
                category: "body",
                price: 275,
                image: "Images/pr11.jpg",
                description: "Invigorating body wash with citrus extracts for fresh, clean skin.",
                isNew: false,
                rating: 4.2
            },
            {
                id: 12,
                name: "Argan Oil Hair Serum",
                category: "haircare",
                price: 104,
                image: "Images/pr21.jpg",
                description: "Lightweight hair serum with argan oil to tame frizz and add shine.",
                isNew: true,
                rating: 4.7
            },
            {
                id: 13,
                name: "Mineral Blush Duo",
                category: "makeup",
                price: 329,
                image: "Images/product2.jpg",
                description: "Two complementary blush shades with mineral formula for natural flush.",
                isNew: false,
                rating: 4.5
            },
            {
                id: 14,
                name: "Overnight Repair Cream",
                category: "skincare",
                price: 899,
                image: "product1.jpg",
                description: "Intensive night cream that repairs skin while you sleep.",
                // isNew: true,
                rating: 4.9
            },
            {
                id: 15,
                name: "Jasmine Garden Perfume",
                category: "fragrance",
                price: 850,
                image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=744&q=80",
                description: "Romantic fragrance with jasmine, white flowers, and musk notes.",
                isNew: false,
                rating: 4.8
            },
            {
                id: 16,
                name: "Clay Detox Mask",
                category: "skincare",
                price: 1339,
                image: "Images/pr18.jpg",
                description: "Purifying clay mask to deep clean pores and remove impurities.",
                // isNew: true,
                rating: 4.6
            },
            {
                id: 17,
                name: "Coconut Hair Oil",
                category: "haircare",
                price: 269,
                image: "Images/pr24.jpg",
                description: "Pure coconut oil for hair nourishment and scalp treatment.",
                isNew: false,
                rating: 4.4
            },
            {
                id: 18,
                name: "Matte Lip Liner Set",
                category: "makeup",
                price: 24.00,
                image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
                description: "Set of 4 matte lip liners in versatile nude shades.",
                isNew: true,
                rating: 4.3
            },
            {
                id: 19,
                name: "Rosewater Toner",
                category: "skincare",
                price: 79,
                image: "Images/pr19.jpg",
                description: "Gentle toner with rosewater to balance and refresh skin.",
                isNew: false,
                rating: 4.5
            },
            {
                id: 20,
                name: "Sea Salt Body Scrub",
                category: "body",
                price: 399,
                image: "Images/produt6.jpg",
                description: "Exfoliating body scrub with sea salt and essential oils.",
                isNew: true,
                rating: 4.7
            },
            {
                id: 21,
                name: "Eyebrow Defining Pencil",
                category: "makeup",
                price: 20.00,
                image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80",
                description: "Precision eyebrow pencil with built-in brush for natural brows.",
                isNew: false,
                rating: 4.6
            },
            {
                id: 22,
                name: "Vitamin C Brightening Serum",
                category: "skincare",
                price: 199,
                image: "Images/product4.jpg",
                description: "Potent vitamin C serum to brighten skin and reduce dark spots.",
                isNew: true,
                rating: 4.9
            },
            {
                id: 23,
                name: "Woody Musk Cologne",
                category: "fragrance",
                price: 72.00,
                image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=744&q=80",
                description: "Masculine scent with woody, musky, and spicy notes.",
                isNew: false,
                rating: 4.7
            },
            {
                id: 24,
                name: "Heat Protectant Spray",
                category: "haircare",
                price: 225,
                image: "Images/pr25.jpg",
                description: "Protective spray for hair before heat styling tools.",
                // isNew: true,
                rating: 4.4
            },
            {
                id: 25,
                name: "Midnight Velvet Eyeliner",
                category: "makeup",
                price: 399,
                image: "Images/pr8.jpg",
                description: "Long-wear liquid eyeliner with intense pigment and a smooth tip for precise application.",
                // isNew: true,
                rating: 4.4
            },
            {
                id: 26,
                name: "Glow Body Oil",
                category: "body",
                price: 29.99,
                image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
                description: "Lightweight body oil that leaves skin glowing and nourished without greasiness.",
                isNew: false,
                rating: 4.5
            },
            {
                id: 27,
                name: "Caffeine Scalp Tonic",
                category: "haircare",
                price: 279,
                image: "Images/pr14.jpg",
                description: "Scalp tonic with caffeine to invigorate roots and promote healthy-looking hair.",
                isNew: true,
                rating: 4.2
            },
            {
                id: 28,
                name: "Silk Night Serum",
                category: "skincare",
                price: 72.50,
                image: "Images/product5.jpg",
                description: "Overnight serum rich in peptides and antioxidants to restore skin while you sleep.",
                isNew: true,
                rating: 4.9
            },
            {
                id: 29,
                name: "Petal Blush Stick",
                category: "makeup",
                price: 2250,
                image: "Images/pr9.jpg",
                description: "Cream-to-powder blush stick for a natural, buildable flush.",
                isNew: false,
                rating: 4.3
            },
            {
                id: 30,
                name: "Amber Oud Perfume",
                category: "fragrance",
                price: 699,
                image: "Images/pr17.jpg",
                description: "Warm and luxurious fragrance featuring amber, oud and spicy accords.",
                isNew: false,
                rating: 4.8
            },
            {
                id: 31,
                name: "Deep Cleanse Charcoal Mask",
                category: "skincare",
                price: 299,
                image: "Images/pr12.jpg",
                description: "Detoxifying charcoal mask to absorb impurities and refine pores.",
                isNew: true,
                rating: 4.4
            },
            {
                id: 32,
                name: "Satin Finish Setting Spray",
                category: "makeup",
                price: 169,
                image: "Images/pr10.jpg",
                description: "Lightweight setting spray that blurs pores and adds a satin finish to makeup.",
                isNew: false,
                rating: 4.1
            },
            {
                id: 33,
                name: "Nourishing Hand Cream",
                category: "body",
                price: 250,
                image: "Images/pr7.jpg",
                description: "Rich hand cream with shea butter for soft, protected hands.",
                isNew: true,
                rating: 4.6
            },
            {
                id: 34,
                name: "Thermal Protect Serum",
                category: "haircare",
                price: 29.00,
                image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
                description: "Lightweight serum to shield hair from heat styling and reduce breakage.",
                isNew: true,
                rating: 4.5
            },
            {
                id: 35,
                name: "Peony Body Mist",
                category: "body",
                price: 189,
                image: "Images/pr20.jpg",
                description: "Delicate floral mist for a light and refreshing scent throughout the day.",
                isNew: false,
                rating: 4.2
            },
            {
                id: 36,
                name: "Eye Revive Cooling Gel",
                category: "skincare",
                price: 26.50,
                image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
                description: "Cooling under-eye gel to reduce puffiness and refresh tired eyes.",
                isNew: true,
                rating: 4.7
            }
        ];

        // DOM Elements
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        const cartIcon = document.getElementById('cartIcon');
        const cartSidebar = document.getElementById('cartSidebar');
        const closeCart = document.getElementById('closeCart');
        const overlay = document.getElementById('overlay');
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartEmpty = document.getElementById('cartEmpty');
        const cartLoginRequired = document.getElementById('cartLoginRequired');
        const cartTotal = document.getElementById('cartTotal');
        const totalAmount = document.getElementById('totalAmount');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const loginBtn = document.getElementById('loginBtn');
        const userInfo = document.getElementById('userInfo');
        const userAvatar = document.getElementById('userAvatar');
        const userName = document.getElementById('userName');
        const loginRequiredModal = document.getElementById('loginRequiredModal');
        const loginFromModalBtn = document.getElementById('loginFromModalBtn');
        const closeLoginModalBtn = document.getElementById('closeLoginModalBtn');
        const loginFromCartBtn = document.getElementById('loginFromCartBtn');
        const productsGrid = document.getElementById('productsGrid');
        const pagination = document.getElementById('pagination');
        const showingCount = document.getElementById('showingCount');
        const totalCount = document.getElementById('totalCount');
        const filterOptions = document.querySelectorAll('.filter-option');
        const sortOptions = document.querySelectorAll('.sort-option');
        
        // Initialize cart from localStorage
        function initCart() {
            const savedCart = localStorage.getItem('beautyBloomCart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
                updateCartCount();
            }
        }
        
        // Initialize user from localStorage
        function initUser() {
            const savedUser = localStorage.getItem('beautyBloomUser');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                updateUserUI();
                updateCartSidebar();
            }
        }
        
        // Wishlist state (persisted)
        let wishlist = [];
        function initWishlist() {
            const saved = localStorage.getItem('beautyBloomWishlist');
            wishlist = saved ? JSON.parse(saved) : [];
            updateWishlistCount();
        }
        function saveWishlist() {
            localStorage.setItem('beautyBloomWishlist', JSON.stringify(wishlist));
            updateWishlistCount();
        }
        function isInWishlist(productId, source = 'products') {
            return wishlist.some(p => p.id === productId && p.source === source);
        }
        function toggleWishlist(product, source = 'products') {
            const idx = wishlist.findIndex(p => p.id === product.id && p.source === source);
            if (idx > -1) {
                wishlist.splice(idx, 1);
                saveWishlist();
                showNotification(`${product.name} removed from wishlist`);
            } else {
                const entry = { ...product, source };
                wishlist.push(entry);
                saveWishlist();
                showNotification(`${product.name} added to wishlist`);
            }
        }
        function updateWishlistCount() {
            const el = document.getElementById('wishlistCount');
            const count = wishlist.length;
            if (el) {
                el.textContent = count;
                el.style.display = count > 0 ? 'flex' : 'none';
            }
        }
        
        // Save cart to localStorage
        function saveCart() {
            localStorage.setItem('beautyBloomCart', JSON.stringify(cart));
        }
        
        // Save user to localStorage
        function saveUser() {
            if (currentUser) {
                localStorage.setItem('beautyBloomUser', JSON.stringify(currentUser));
            } else {
                localStorage.removeItem('beautyBloomUser');
            }
        }
        
        // Update cart count in header
        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
        
        // Update cart sidebar based on login status
        function updateCartSidebar() {
            cartItems.innerHTML = '';
            
            if (!currentUser) {
                // User not logged in
                cartEmpty.style.display = 'none';
                cartLoginRequired.style.display = 'block';
                cartTotal.style.display = 'none';
                checkoutBtn.style.display = 'none';
                return;
            }
            
            // User is logged in
            cartLoginRequired.style.display = 'none';
            
            if (cart.length === 0) {
                cartEmpty.style.display = 'block';
                cartTotal.style.display = 'none';
                checkoutBtn.style.display = 'none';
                return;
            }
            
            cartEmpty.style.display = 'none';
            cartTotal.style.display = 'flex';
            checkoutBtn.style.display = 'block';
            
            let total = 0;
            
            cart.forEach(item => {
                const product = allProducts.find(p => p.id === item.id);
                if (product) {
                    total += product.price * item.quantity;
                    
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                        <div class="cart-item-img">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="cart-item-info">
                            <div class="cart-item-name">${product.name}</div>
                            <div class="cart-item-price">₹${product.price.toFixed(2)} × ${item.quantity}</div>
                        </div>
                        <button class="cart-item-remove" data-id="${product.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    `;
                    cartItems.appendChild(cartItem);
                }
            });
            
            totalAmount.textContent = `₹${total.toFixed(2)}`;
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.cart-item-remove').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id')); 
                    removeFromCart(productId);
                });
            });
        }
        
        // Add product to cart (only if logged in)
        function addToCart(productId) {
            // Check if user is logged in
            if (!currentUser) {
                showLoginRequiredModal();
                return;
            }
            
            const product = allProducts.find(p => p.id === productId);
            if (!product) return;
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id: productId, quantity: 1 });
            }
            
            updateCartCount();
            updateCartSidebar();
            saveCart();
            
            // Show notification
            showNotification(`${product.name} added to cart!`);
        }
        
        // Remove product from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            updateCartSidebar();
            saveCart();
            
            // Show notification
            const product = allProducts.find(p => p.id === productId);
            if (product) {
                showNotification(`${product.name} removed from cart`);
            }
        }
        
        // Show notification
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background-color: var(--success);
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 3000;
                animation: slideIn 0.3s ease;
            `;
            
            notification.innerHTML = `
                <i class="fas fa-check-circle" style="margin-right: 10px;"></i>
                ${message}
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
            
            // Add animation styles
            if (!document.querySelector('#notificationStyles')) {
                const style = document.createElement('style');
                style.id = 'notificationStyles';
                style.textContent = `
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes slideOut {
                        from { transform: translateX(0); opacity: 1; }
                        to { transform: translateX(100%); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }
        }
        
        // Show login required modal
        function showLoginRequiredModal() {
            loginRequiredModal.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close login required modal
        function closeLoginRequiredModal() {
            loginRequiredModal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Update user UI after login
        function updateUserUI() {
            if (currentUser) {
                // Update header
                userInfo.style.display = 'flex';
                loginBtn.style.display = 'none';
                userName.textContent = currentUser.name;
                userAvatar.textContent = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
                
                // Update cart sidebar
                updateCartSidebar();
            } else {
                // Update header
                userInfo.style.display = 'none';
                loginBtn.style.display = 'block';
                
                // Update cart sidebar
                updateCartSidebar();
            }
        }
        
        // Filter and sort products
        function getFilteredAndSortedProducts() {
            let filteredProducts = [...allProducts];
            
            // Apply filter
            if (currentFilter !== 'all') {
                filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
            }
            
            // Apply sort
            switch(currentSort) {
                case 'price-low':
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'name-asc':
                    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'newest':
                    filteredProducts.sort((a, b) => {
                        if (a.isNew && !b.isNew) return -1;
                        if (!a.isNew && b.isNew) return 1;
                        return 0;
                    });
                    break;
                case 'featured':
                default:
                    // Featured: New products first, then by rating
                    filteredProducts.sort((a, b) => {
                        if (a.isNew && !b.isNew) return -1;
                        if (!a.isNew && b.isNew) return 1;
                        return b.rating - a.rating;
                    });
                    break;
            }
            
            return filteredProducts;
        }
        
        // Load products based on current filter, sort, and page
        function loadProducts() {
            const filteredProducts = getFilteredAndSortedProducts();
            const totalProducts = filteredProducts.length;
            const totalPages = Math.ceil(totalProducts / productsPerPage);
            
            // Update counts
            totalCount.textContent = totalProducts;
            
            // Calculate start and end index for current page
            const startIndex = (currentPage - 1) * productsPerPage;
            const endIndex = Math.min(startIndex + productsPerPage, totalProducts);
            const pageProducts = filteredProducts.slice(startIndex, endIndex);
            
            // Update showing count
            showingCount.textContent = pageProducts.length;
            
            // Clear products grid
            productsGrid.innerHTML = '';
            
            // Load products for current page
            pageProducts.forEach(product => {
                const productCard = createProductCard(product);
                productsGrid.appendChild(productCard);
            });
            
            // Load pagination
            loadPagination(totalPages);
        }
        
        // Create product card
        function createProductCard(product) {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            const newBadge = product.isNew ? '<div class="product-badge">New</div>' : '';
            const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
            
            productCard.innerHTML = `
                ${newBadge}
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-category">${categoryName}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-description">${product.description}</div>
                    <div class="product-price">₹${product.price.toFixed(2)}</div>
                    <div class="product-actions">
                        <button class="product-btn add-to-cart" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="product-btn wishlist-btn" data-id="${product.id}">
                            <i class="far fa-heart"></i> Wishlist
                        </button>
                    </div>
                    <div class="login-required-note">${currentUser ? '' : 'Login required to purchase'}</div>
                </div>
            `;
            
            // Make the product card clickable (excluding action buttons)
            productCard.style.cursor = 'pointer';
            productCard.addEventListener('click', function(e) {
                if (e.target.closest('.add-to-cart') || e.target.closest('.wishlist-btn')) return;
                showProductModal(product);
            });
            
            return productCard;
        }
        
        // Show product detail modal
        function showProductModal(product) {
            const modal = document.createElement('div');
            modal.style.cssText = 'position: fixed; top:0; left:0; width:100%; height:100%; display:flex; justify-content:center; align-items:center; background-color: rgba(0,0,0,0.6); z-index: 4000;';
            modal.innerHTML = `
                <div style="background:#fff; padding:20px; max-width:900px; width:92%; border-radius:10px; position:relative;">
                    <button class="close-product-modal" aria-label="Close" style="position:absolute; top:10px; right:12px; font-size:28px; border:none; background:none; cursor:pointer;">&times;</button>
                    <div style="display:flex; gap:20px; align-items:flex-start; flex-wrap:wrap;">
                        <div style="flex:1; min-width:240px;">
                            <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:8px;">
                        </div>
                        <div style="flex:1; min-width:240px;">
                            <h2 style="margin-top:0;">${product.name}</h2>
                            <p style="color:#555;">${product.description}</p>
                            <p><strong>Price:</strong> ₹${product.price.toFixed(2)}</p>
                            <p><strong>Rating:</strong> ${product.rating} / 5</p>
                            <div style="margin-top:15px; display:flex; gap:10px;">
                                <button class="modal-add-to-cart product-btn"> <i class="fas fa-shopping-cart"></i> Add to Cart</button>
                                <button class="modal-wishlist product-btn"> <i class="far fa-heart"></i> Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            // Elements and handlers
            const closeBtn = modal.querySelector('.close-product-modal');
            const addBtn = modal.querySelector('.modal-add-to-cart');
            const wishBtn = modal.querySelector('.modal-wishlist');

            function closeModal() {
                document.removeEventListener('keydown', onKeyDown);
                if (document.body.contains(modal)) document.body.removeChild(modal);
            }

            function onKeyDown(e) { if (e.key === 'Escape') closeModal(); }
            document.addEventListener('keydown', onKeyDown);

            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });

            addBtn.addEventListener('click', function() {
                addToCart(product.id);
                showNotification(`${product.name} added to cart!`);
                closeModal();
            });

            wishBtn.addEventListener('click', function() {
                if (currentUser) {
                    showNotification(`${product.name} added to your wishlist!`);
                } else {
                    closeModal();
                    showLoginRequiredModal();
                }
            });
        }
        
        // Load pagination
        function loadPagination(totalPages) {
            pagination.innerHTML = '';
            
            if (totalPages <= 1) return;
            
            // Previous button
            const prevButton = document.createElement('button');
            prevButton.className = `pagination-btn ${currentPage === 1 ? 'disabled' : ''}`;
            prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
            prevButton.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    loadProducts();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
            pagination.appendChild(prevButton);
            
            // Page buttons
            const maxVisiblePages = 5;
            let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            
            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }
            
            for (let i = startPage; i <= endPage; i++) {
                const pageButton = document.createElement('button');
                pageButton.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
                pageButton.textContent = i;
                pageButton.addEventListener('click', () => {
                    currentPage = i;
                    loadProducts();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                pagination.appendChild(pageButton);
            }
            
            // Next button
            const nextButton = document.createElement('button');
            nextButton.className = `pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`;
            nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
            nextButton.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    loadProducts();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
            pagination.appendChild(nextButton);
        }
        
        // Mobile menu toggle
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        
        // Cart sidebar functionality
        cartIcon.addEventListener('click', () => {
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeCart.addEventListener('click', closeCartSidebar);
        overlay.addEventListener('click', closeCartSidebar);
        
        function closeCartSidebar() {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Checkout button — send cart to checkout page
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;

            if (!currentUser) {
                // keep existing flow: require login before viewing cart/checkout
                showLoginRequiredModal();
                return;
            }

            // Normalize cart to the simple checkout format used by checkout.html
            const checkoutCart = cart.map(item => {
                const prod = allProducts.find(p => p.id === item.id) || {};
                return { id: item.id, name: prod.name || `Product ${item.id}`, price: prod.price || 0, quantity: item.quantity };
            });

            localStorage.setItem('simpleCart', JSON.stringify(checkoutCart));

            // Close sidebar and navigate to checkout
            closeCartSidebar();
            window.location.href = 'checkout.html';
        });
        
        // Save order to user's order history
        function saveOrderToHistory() {
            if (!currentUser) return;
            
            const order = {
                id: Date.now(),
                date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                items: [...cart],
                total: parseFloat(totalAmount.textContent.replace(/[^0-9.-]+/g, ''))
            };
            
            // Get existing orders from localStorage
            let userOrders = JSON.parse(localStorage.getItem(`beautyBloomOrders_${currentUser.email}`)) || [];
            
            // Add new order
            userOrders.unshift(order);
            
            // Keep only last 5 orders
            if (userOrders.length > 5) {
                userOrders = userOrders.slice(0, 5);
            }
            
            // Save back to localStorage
            localStorage.setItem(`beautyBloomOrders_${currentUser.email}`, JSON.stringify(userOrders));
        }
        
        // Login functionality
        function showLoginModal() {
            const loginModal = document.createElement('div');
            loginModal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
            `;
            
            loginModal.innerHTML = `
                <div style="background-color: white; padding: 40px; border-radius: 15px; max-width: 400px; width: 90%;">
                    <h2 style="color: var(--dark); margin-bottom: 20px;">Login to Beauty & Bloom</h2>
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="loginName">Full Name</label>
                            <input type="text" id="loginName" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="loginEmail">Email Address</label>
                            <input type="email" id="loginEmail" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="loginPassword">Password</label>
                            <input type="password" id="loginPassword" class="form-control" required value="password">
                        </div>
                        <div style="display: flex; gap: 10px; margin-top: 30px;">
                            <button type="submit" class="login-btn" style="flex: 1;">Login</button>
                            <button type="button" id="closeLogin" class="login-btn" style="flex: 1; background-color: #ddd; color: var(--dark);">Close</button>
                        </div>
                        <p style="margin-top: 15px; font-size: 14px; color: #666; text-align: center;">
                            Use any name and email. Password is "password"
                        </p>
                    </form>
                </div>
            `;
            
            document.body.appendChild(loginModal);
            
            // Close login modal
            document.getElementById('closeLogin').addEventListener('click', () => {
                document.body.removeChild(loginModal);
            });
            
            // Login form submission
            document.getElementById('loginForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('loginName').value;
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                
                if (password !== 'password') {
                    alert('Invalid password. Please use "password"');
                    return;
                }
                
                if (!name || !email) {
                    alert('Please enter your name and email');
                    return;
                }
                
                currentUser = {
                    name: name,
                    email: email,
                    joined: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                };
                
                updateUserUI();
                saveUser();
                showNotification(`Welcome to Beauty & Bloom, ${name.split(' ')[0]}! You can now add items to cart and place orders.`);
                
                // Close both modals
                document.body.removeChild(loginModal);
                closeLoginRequiredModal();
                
                // Reload products to update login required notes
                loadProducts();
            });
            
            // Close modal when clicking outside
            loginModal.addEventListener('click', function(e) {
                if(e.target === this) {
                    document.body.removeChild(loginModal);
                }
            });
            
            // Set default values for demo
            setTimeout(() => {
                document.getElementById('loginName').value = 'Jane Doe';
                document.getElementById('loginEmail').value = 'jane@example.com';
            }, 100);
        }
        
        // Logout functionality
        function logout() {
            currentUser = null;
            updateUserUI();
            saveUser();
            showNotification('You have been logged out.');
            
            // Reload products to update login required notes
            loadProducts();
        }
        
        // Add logout functionality to user avatar
        userInfo.addEventListener('click', () => {
            const logoutConfirm = confirm('Are you sure you want to logout?');
            if (logoutConfirm) {
                logout();
            }
        });
        
        // Login button event
        loginBtn.addEventListener('click', showLoginModal);
        
        // Login from modal button
        loginFromModalBtn.addEventListener('click', () => {
            closeLoginRequiredModal();
            showLoginModal();
        });
        
        // Login from cart button
        loginFromCartBtn.addEventListener('click', () => {
            closeCartSidebar();
            showLoginModal();
        });
        
        // Close login modal button
        closeLoginModalBtn.addEventListener('click', closeLoginRequiredModal);
        
        // Filter option event listeners
        filterOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove active class from all filter options
                filterOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                this.classList.add('active');
                
                // Update current filter
                currentFilter = this.getAttribute('data-category');
                currentPage = 1;
                
                // Reload products
                loadProducts();
            });
        });
        
        // Sort option event listeners
        sortOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove active class from all sort options
                sortOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                this.classList.add('active');
                
                // Update current sort
                currentSort = this.getAttribute('data-sort');
                currentPage = 1;
                
                // Reload products
                loadProducts();
            });
        });
        
        // Event delegation for product buttons
        document.addEventListener('click', function(e) {
            // Add to cart buttons
            if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
                const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
                const productId = parseInt(button.getAttribute('data-id'));
                addToCart(productId);
            }
            
            // Wishlist buttons
            if (e.target.classList.contains('wishlist-btn') || e.target.closest('.wishlist-btn')) {
                const button = e.target.classList.contains('wishlist-btn') ? e.target : e.target.closest('.wishlist-btn');
                const productId = parseInt(button.getAttribute('data-id'));
                const product = allProducts.find(p => p.id === productId);

                if (product) {
                    toggleWishlist(product, 'products');
                }
            }
        });
        
        // Initialize page
        document.addEventListener('DOMContentLoaded', () => {
            initCart();
            initUser();
            initWishlist();
            updateCartSidebar();
            loadProducts();

            const wishlistIcon = document.getElementById('wishlistIcon');
            if (wishlistIcon) {
                wishlistIcon.addEventListener('click', () => { window.location.href = 'wishlist.html'; });
            }
        });
