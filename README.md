# Nintex University UI

## Overview

This repo has the front end code for the webpages of Nintex University, a training platform hosted on Learning Management System (LMS) vendor Skilljar. The code either modifies existing elements that come with the Skilljar platform, or generates new ones to be appended to the page. 

Skilljar dashboard allows HTML snippets to be inserted in theming, catalog pages or course series pages. **This is why all the non-HTML code is wrapped up in style or script tags**, and why the code is not modularized for different components on a page.

## Dependencies

These are the main sources of data which the UI depends on:
- Course and course series configurations within Skilljar Dashboard enable the course descriptions, course durations, difficulty, etc.
- Course tags within Skilljar Dashboard enable the metadata on each course for filtering and search.
- Proxy API hosted in Azure that communicates with Skilljar API to provide custom course data in pages where it's not available out of the box.

## Pages

Each project file is mapped to a location in Skilljar Dashboard below.

### Global Theming

Project directory: theming
Skilljar Dashboard: Theming > Themes > Theme name

- theme-head.html: Global Head Snippet
    - Injected into the head of every page (after theme CSS).
    - Contains styling shared globally across every page.
    - Styles components on the homepage.
- theme-body.html: Global Code Snippet
    - Injected at the bottom of every page (end of <body>).
    - Contains functions shared globally across every page.
    - Renders components on the homepage.

**Note about using images**
The icons rendered on the cards of courses are uploaded as the Promo image in the Details settings of each course. The same applies to course series. Any other site graphics and images used in the site (such as banner backgrounds and hero images) are applied in the code, and have to be uploaded first to obtain the image url. For now, all of these custom site graphics have to be uploaded to:
1. Domains > Catalog Settings of nintex.skilljar.com > Course Series > Image Repository > Header html
2. Find the Header html box and click the insert image icon. This is not the promo image.
3. Upload the image, and copy the URL.
4. Before clicking OK, check Constrain proportions and set dimensions to 640 x 360.
5. The URL can now be used throughout the site.

### Home

Project directory: home
Skilljar Dashboard: Domains & Publishing > Domains > Catalog Settings > Catalog

- home-catalog.html: Catalog Header
    - Injected into the <header> element at the top of the homepage.

**Note about Catalog Settings and page navigation**
The catalog page of the selected domain is also where course series are made visible within the Visibility and Order section of the dashboard (at the bottom). All course series including those on subpages have to made visible here in order for them to be rendered by Skilljar. For a nested course series to not show up on the homepage, its display must be set to 'none' within home-catalog.html. Labeled 'Hidden Courses List'.

Because Skilljar does not yet support series within a series, it cannot support user navigation of pages within pages out of the box. To simulate this, all the nested course series are therefore published and hidden from the homepage. Then they are rendered within the Header html of its parent page. 

For example, On-Demand Training is a top-level series visible on the homepage. Nintex Process Automation is one of its nested course series. Nintex Process Automation series contains courses that are already supported by Skilljar, but its tile/card HTML needs to be manually added to the Header html of On-Demand Training. Doing so creates the simulated hierarchy of homepage > On-Demand Training > Process Automation.

### On-Demand Series

Project directory: ondemand
Skilljar Dashboard: Domains & Publishing > Domains > Catalog Settings > Course Series

The On-Demand Training page is a course series in Skilljar. 
- ondemand-series.html: On-Demand Training > Header html
    - Injects local HTML, CSS, JS into the <header> of On-Demand page.

**Note about contents of this page**
Each card here represents a course series. The HTML of the cards are added to the page manually for now due to the reasons mentioned in the previous section. This means that the title and subtitle of each card must be hardcoded when there are changes. Also, in order for the course count of each course series to render dynamically, **the title of the course in HTML must match the title of the course in Skilljar**.

### On-Demand Sub Series

Each page within a series within the On-Demand page is also a course series in Skilljar. When creating a new series, make sure to copy the code from one of these series and make the following changes:
- Change the text in the banner elements to match the course series contents.
- Add or remove filter elements in the #filters-row section to match the contents of the course series. Each filter must have .filter-control class.
- Change the background property of .header-block-graphic style to the URL of the image. This URL is obtained when saving the image in the Image Repository course series.
- Within one of the scripts, find the filters array and add or remove the filter elements by id. The existing functions defined in global theme will take care of the logic.
- Find the other script tag about MINOR DOM EDITS


- ondemand-process-map.html: Nintex Process Automation > Header html
    - Injects local HTML, CSS, JS into the <header> Process Automation page.

