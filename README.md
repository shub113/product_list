# product_list

List all product for different screen sizes

NOTE
-> sorting is controlled from code since I couldn't find any free API which support all three (search, filter and sort).
-> search and filter is supported by API, so it is applied on complete dataset.
-> sort (by price) is going to sort only the fetched data (i.e. ones visible on UI) and not the complete dataset.

1. "components" folder consists of all reuseable components.
2. "pages" folder has all UI related files. "product.jsx" is the main-page/home-page for UI.
3. "hooks" folder has all custom hooks i.e. "UseDebounce" & "UseProductData".
4. "routeList.jsx" file has all the defined paths with code-splitting.
5. "noPath.jsx" handles UI when invalid path is typed in url.
6. API failures are handled with toast message.

TO run locally, clone the repo and run "yarn dev".

Project is also deployed on github pages. DEPLOYMENT LINK - https://shub113.github.io/product_list/
