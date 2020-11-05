app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit"> <!--  ".prevent" is a modifer that prevents the default browser refresh and will tripper the onSubmit method -->
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name"> <!-- v-model creates a 2 way binding -->
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">  <!-- ".number" is a modifier that typecast the modifier as a number -->
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
      <!-- solution -->
      <label for="recommend">Would you recommend this product?</label>
      <select id="recommend" v-model="recommend">
        <option>Yes</option>
        <option>No</option>
      </select>
      <!-- solution -->   
      <input class="button" type="submit" value="Submit">  
    </form>`,
    data() {
      return {
        name: '',
        review: '',
        rating: null,
        // solution
        recommend: null
        // solution
      }
    },
    methods: {
      onSubmit() {
        if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
          alert('Review is incomplete. Please fill out every field.')
          return
        }
        
        //We need to send this product review up ($emit) because we don't want the product reviews to live on the form, we want the product review to live on the product 
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend // solution
  
        }
        this.$emit('review-submitted', productReview) //will pass productReview as the payload.
  
        this.name = ''
        this.review = ''
        this.rating = null
        this.recommend = null // solution
  
      }
    }
  })