
---
aliases: []
tags: []
---
<%*
// Function to format a date as YYYY-MM-DD
function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

// Get the file creation date
let creationDate = tp.file.creation_date("YYYY-MM-DD");
// Get the current date for 'last modified'
let currentDate = formatDate(new Date());
// Get the file title, using the filename as a fallback
let title = tp.file.title;
// Generate a "slug" for the URL (lowercase, hyphenated)
let slug = tp.file.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
-%>
---
title: "<%* tR += `${title}` %>"
date: <%* tR += `${creationDate}` %>
lastmod: <%* tR += `${currentDate}` %>
draft: false
tags: []
slug: "<%* tR += `${slug}` %>"
---

