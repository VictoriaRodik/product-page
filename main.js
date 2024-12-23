const SPACE_ID = 'zj2sop20feim';
const ACCESS_TOKEN = 'UCV0uhzJF8h_xuLRadlKI8FW56xKO7YJ4SiKtLHuB5U';
const CONTENT_TYPE = 'landingPage';


fetch(`https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=${CONTENT_TYPE}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.items);
    displayContent(data.items);
  })
  .catch((error) => console.error('Error:', error));


  function displayContent(items) {
    if (items.length === 0) {
      console.error("No data found");
      return;
    }

    const item = items[0];
  
    const blogName = item.fields.blogName || "[Insert Name]";
    const companyName = item.fields.companyName || "[Insert Company]";
    const year = item.fields.year || "[Insert Year]";
  
    document.getElementById("blogName").textContent = blogName;
    document.getElementById("companyName").textContent = companyName;
    document.getElementById("year").textContent = year;
  }
  




