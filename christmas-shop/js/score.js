export const showScore = () =>
  console.log(`
Score:  110 / 110

### CrossCheck Criteria (110 points)

1. Checking validation of pages: **+18**
   - The layout for both pages is validated and error-free according to the W3C Validator (https://validator.w3.org/): **+12** (6 points per page)
     - [x] Valid markup of checked page corresponds to the message _"Document checking completed. No errors or warnings to show."_ In this case, we assign the full points for the checked page (+6).
     - [x] If there are "warnings" but no "errors", we assign half of the points (+3) for the checked page
   - [x] Favicon is added to each page: **+2**
   - [x] Only one "<h1>" per each page: **+2**
   - [x] The URL of the "Gifts" page differs from the URL of the "Home" page (e.g. "your-site.com" for the "Home" page and "your-site.com/gifts" for the "Gifts" page): **+2**
2. The layout matches the design: **+46**
   - [x] "<header>" on each page: **+4**
   - [x] "Hero" section on "Home" page: **+6**
   - [x] "About" section on "Home" page: **+6**
   - [x] "Slider" section on "Home" page: **+6**
   - [x] "Best Gifts" section on "Home" page: **+6**
   - [x] "CTA" section on "Home" page: **+6**
   - [x] "Gifts" section on "Gifts" page: **+6**
   - [x] "<footer>" on each page: **+6**
3. CSS Requirements: **+10**
   - [x] For positioning gifts in "Best Gifts" section on "Home" page and gifts in "Gifts" section on "Gifts" page used **Flexbox** or **Grid Layout**: **+4**
   - [x] When scaling the browser page (<100%) or increasing the page width (>1440px), the layout of both pages is centered rather than shifted to the side and not stretched across the entire width: **+4**
   - [x] The empty spaces around the layout are filled with white color: **+2**
4. Interactivity: **+36**
   - [x] Navigation elements (except "CONTACTS") lead to corresponding sections on "Home" page: **+4**
   - [x] "CONTACTS" in navigation panel links to the "<footer>" on its own page: **+2**
   - [x] Smooth scrolling with anchor links: **+2**
   - [x] When clicking on the **GIFTS** link in "<header>" and **Explore Magical Gifts** button in "Hero" and "CTA" sections on "Home" page, it navigates to the "Gifts" page: **+2**
   - [x] The **GIFTS** link in "<header>" on "Gifts" page is non-interactive and don't have a hover effects: **+2**
   - [x] When clicking on the **Logo** in "<header>", it navigates to the "Home" page: **+2**
   - [x] The active **ALL** tab in "Gifts" section of "Gifts" page is non-interactive and don't have a hover effects: **+2**
   - [x] Each Gift-card in the "Gifts" section of the "Gifts" page, "Best Gifts" section on "Home" page and cards in "<footer>" is interactive when hovering over any area of the card: **+6**
   - [x] In the "<footer>", clicking on the card **CALL US** should initiate a phone call: **+2**
   - [x] In the "<footer>", clicking on the card **WRITE US** should open the mail client: **+2**
   - [x] In the "<footer>", clicking on the card **MAGIC FOREST** should open a new browser tab with Google Maps displaying any location of your choice: **+2**
   - [x] In the "<footer>", clicking on the link **Made in Rolling Scopes School** should open the [school's website](https://rs.school/) in a new tab: **+2**
   - [x] Interactivity of the links and buttons is implemented according to the Figma layout. Interactivity includes not only changing cursor's appearance, for example, using the "cursor: pointer" property, but also the use of other visual effects, such as changing the background color or font color, following the **Styleguide** in the Figma layout. If the interactivity is not specified in the **Styleguide**, "cursor: pointer" property is enough: **+4**
   - [x] Mandatory requirement for interactivity: smooth change in the appearance of an element on hover, without affecting adjacent elements: **+4**
`);
