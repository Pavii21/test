import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        An e-commerce website designed for visually impaired users focuses on providing a seamless and accessible shopping experience. The site ensures full compatibility with screen readers, allowing all content, including product descriptions, prices, and buttons, to be read aloud. It offers a high contrast mode to aid users with low vision in distinguishing between different elements on the page. Keyboard navigation is fully supported, with clear focus indicators showing the currently selected element, making it easier for users who cannot use a mouse. All product images come with descriptive alt text, ensuring that screen readers can convey visual information effectively. Forms, such as those for checkout and user registration, are designed to be easily navigable, with clear labels and instructions. The website integrates with voice command systems, enabling users to search for products, add items to the cart, and complete purchases using their voice. Additionally, there are options for larger text sizes to improve readability without disrupting the site’s layout. Overall, the website features a clean and simple layout, ensuring ease of use and accessibility for visually impaired users.
        </p>
        <p>Our e-commerce website offers a user-friendly platform where customers can browse a wide range of products effortlessly. The intuitive design ensures easy navigation, with categories and filters to help users find exactly what they need. Secure payment options and a streamlined checkout process provide a seamless shopping experience. Additionally, customers can read detailed product descriptions, view high-quality images, and check customer reviews before making a purchase. With responsive design, the website is accessible on both desktop and mobile devices, allowing for convenient shopping anytime, anywhere.
        </p>

      </div>
    </div>
  )
}

export default DescriptionBox
