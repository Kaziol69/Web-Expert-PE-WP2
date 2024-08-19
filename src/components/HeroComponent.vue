<script>
import PopularProductsComponent from "@/components/PopularProductsComponent.vue";

export default {
  components: {
    PopularProductsComponent,
  },
};
</script>

<template>
  <!-- Banner section-->
  <div class="banner">
    <div class="banner-text text-center">
      <h2>
        Welcome to Club225 <br />
        <span>Are you ready for 225?</span>
      </h2>
      <p>At Club225, we're more than just a brand; we're a lifestyle</p>
      <a href="#product" class="explore text-center">EXPLORE</a>
    </div>
  </div>
  <!-- Banner section end -->
  <PopularProductsComponent />
  <!-- about section-->
  <div class="about-section" id="about">
    <div class="about-row">
      <div class="about-left">
        <h2>Our story</h2>
        <p>
          Club225 was born out of a passion for fashion, a dedication to
          quality, and a desire to create a brand that represents a lifestyle of
          elegance and sophistication. Founded by a group of like-minded
          individuals who shared a vision for premium fashion, Club225 quickly
          became a symbol of timeless style and exceptional craftsmanship.
        </p>
      </div>
      <div class="about-right">
        <img src="../assets/images/story.jpg" class="w-100" alt="story" />
      </div>
    </div>
    <div class="about-row">
      <div class="about-left order-2">
        <h2>Quality is Our Signature</h2>
        <p>
          At Club225, we believe that true style is rooted in quality. That's
          why we source only the finest materials and work with skilled artisans
          who share our commitment to excellence. Every product in our
          collection reflects the dedication and attention to detail that
          defines our brand.
        </p>
      </div>
      <div class="about-right order-1">
        <img src="../assets/images/quality.jpg" class="w-100" alt="quality" />
      </div>
    </div>
  </div>
  <!-- about section end -->

  <!-- Contact -->
  <div id="contact">
    <div class="contact-section">
      <h2 class="text-center">CONTACT US!</h2>
      <div class="contact-main">
        <div class="form-section">
          <form action="#" method="post">
            <div class="input-box">
              <label for="name">Name*</label>
              <input
                type="text"
                class="w-100"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div class="input-box">
              <label for="email">Email*</label>
              <input
                type="email"
                class="w-100"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div class="input-box">
              <label for="phone">Phone number*</label>
              <input
                type="phone"
                class="w-100"
                id="phone"
                placeholder="Your Phone Number"
              />
            </div>
            <div class="input-box">
              <label for="message">Message*</label>
              <textarea
                name="message"
                id="message"
                class="w-100"
                placeholder="Your Message"
              ></textarea>
            </div>

            <a href="#" class="text-center">SEND EMAIL</a>
          </form>
        </div>
        <div class="details">
          <ul>
            <li>
              <a href="mailto:Club225@yapping.be">Club225@yapping.be</a>
            </li>
            <li><a href="tel:+32X XX XX XX XX">+324 43 23 43 12</a></li>
            <li>
              <a href="#">
                Nieuw-jaarstraat 24 <br />
                3500 Limburg, Hasselt <br />
                Belgie
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact end -->
</template>

<style lang="scss" scoped></style>
