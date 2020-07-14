const express = require('express');
const routes = express.Router();
const instructors = require('./controllers/instructors');
const members = require('./controllers/members');

routes.get('/', function(req, res){
    return res.render("/instructors");
})

routes.get('/instructors', instructors.index);
routes.get('/instructors/create', instructors.create);
routes.get('/instructors/:id', instructors.show);
routes.get('/instructors/:id/edit', instructors.edit);
routes.post("/instructors", instructors.post);
routes.put("/instructors", instructors.put);
routes.delete("/instructors", instructors.delete);

routes.get('/members', members.index);
routes.get('/members/create', members.create);
routes.get('/members/:id', members.show);
routes.get('/members/:id/edit', members.edit);
routes.post("/members", members.post);
routes.put("/members", members.put);
routes.delete("/members", members.delete);

module.exports = routes;

/* server.get("/", function(req, res){
    const about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/47889306?s=460&u=6577fd93874161fc7c386bbf37b1e05019de0503&v=4",
        name: "Josué Filipe",
        role: "Programador - Nova Software",
        description: "Atuando na área desde 2018 — Desenvolvedor Front End e Back End",
        links: [
            {
                name: "Github",
                url: "https://github.com/josueflpp"
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/josueflpp/"
            },
            {
                name: "Linkedin",
                url: "https://github.com/josueflpp"
            }
        ]
    }

    return res.render("about", { about });
})

server.get("/classes", function(req, res){
    return res.render("classes", { items: logos });
});

server.get("/logo", function(req, res) {
    const id = req.query.id;
    
    const logo = logos.find(function(logo){
        return logo.id == id;
    });

    if (!logo) {
        return res.send("Logo not found!");
    } else {
        return res.render("logo", { item: logo });
    }

    res.send(id);
});
 */