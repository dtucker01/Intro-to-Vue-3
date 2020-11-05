const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks', 
            selectedVariant: 0, 
            details: ['50% cotton', '30% wool', '20%'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: false },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 2, onSale: true },
            ],
            sizes: [ 'S','M', 'L', 'XL'],
            brand: 'vue Mastery',
            onSale: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    // computed properties can be seen like a calculator. They calculte or compute values for us
    // computed properties cache the value. Only updates when needed, or when its dependency changes. 
    computed: {
        title() {
            return  this.brand + '' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            //return this.variants[this.selectedVariant].onSale
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
    }
})