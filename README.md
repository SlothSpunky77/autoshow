# What is this project about?
For our web technologies project, I decided to implement a racing video game car selection section using node.js, express.js and React along with mongoDB as a backend (MERN STACK).    
## The highlight of this project:
Instead of having a page for every make, I chose to have one page load the respective car images whenever a different make is chosen. As opposed to the browser loading 'mazda.ejs' when I click on its hyperlink, it brings forth all images under 'mazda' from the database and renders it.
### Instructions:    
`npm install express`    
`npm install mongoose`     
`sudo pacman -S nodejs npm` (for Arch linux distros)    
`paru mongodb-bin mongodb-compass` (for Arch linux distros)    
`sudo systemctl start mongodb`    
`node seed.js`    
`node src/app.js`
