# Assignment Three

The purpose of this assignment is to demonstrate the understanding of React Router. Please be advised, the deadline of this assignment is Wednesday, 3rd March, 2021.

## Task

1. Create two component. one is Product Page and another one is Product Detail page
2. On start, the product page will be displayed which will be the root route. You can use static data defined by yourself to render the list page. show the name and price on the list. For an example:

```js
//create a state containing list of product.
const [product, setProduct] = useState([
  {
    name: "Product Name",
    description: "Product Description",
    price: "price",
    category: "Product Category",
  },
  {
    name: "Product Name",
    description: "Product Description",
    price: "price",
    category: "Product Category",
  },
  {
    name: "Product Name",
    description: "Product Description",
    price: "price",
    category: "Product Category",
  },
]);
```

3. OnClick each and every product, the user will be redirected to 'product-details/:id' where the id is the related index number of the product array.

4. Before each page is rendered, show a loader image e.g https://codepen.io/collection/jifIK/

5. After page is rendered, on dismount, hide the loader.

6. Add navigation bar on top of each page to navigate between pages.

7. Add a page for 404 error.
