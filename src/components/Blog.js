import React from 'react'

const blogData = [
    {
    title: "New learning field - React Native",
    date: "July 30, 2020",
    content: "After graduating Flatiron School, I’ve been trying to find more things to study to extend my skills There are so many languages and...",
    link: "https://junymc.github.io/new_learning_field_-_react_native"
    },
    {
    title: "Thoughts about technology",
    date: "March 19, 2020",
    content: "I was born in Korea in the early 1980s. I don’t have many memories from the 1980s, but I do remember that the 1988 Seoul...",
    link: "https://junymc.github.io/thoughts_about_technology"
    },
    {
    title: "React/Redux : Adventure Challenge",
    date: "March 15, 2020",
    content: "Four weeks into my React/Redux project and it’s finally done! It felt a lot longer like every other project. They... ",
    link: "https://junymc.github.io/final_project_for_flatiron_-_react_redux"
    },
    {
    title: "Looking back my Graphic Design projects",
    date: "February 19, 2020",
    content: "I always was interested in art and design. I wanted to go to a High School that focused on Art & Design growing...",
    link: "https://junymc.github.io/looking_back_my_graphic_design_projects"
    },
    {
    title: "javascript project: Shoe Collection SPA",
    date: "January 6, 2020",
    content: "I finally moved another step closer to becoming a programmer. Throughout my time at Flatiron, I’d enter...",
    link: "https://junymc.github.io/javascript_project_shoe_collection_spa"
    },
    {
    title: "Rails Project - Party Planner",
    date: "October 29, 2019",
    content: "This project was really hard for me. Rails is a very powerful framework, but in order to use this  magical tool it still...",
    link: "https://junymc.github.io/rails_project_-_party_planner"
    },
    {
    title: "Sinatra Project Movie-Review",
    date: "August 17, 2019",
    content: "I really enjoyed completing this project and felt I learned more than our initial project with CLI. I also felt more comfortable...",
    link: "https://junymc.github.io/sinatra_project_movieview"
    },
    {
    title: "Ruby CLI Data Gem Project: LasVegasEvent",
    date: "May 27, 2019",
    content: "I finally compeleted my very first project! Initially, I was scared to build a working program from scratch by myself...",
    link: "https://junymc.github.io/ruby_cli_data_gem_project_lasvegasevent"
    }
]

export default function Blog() {

    return (
        <section className="blog-boxes">
            <div className="row">
                {blogData.map((blog) => (
                    <div className="col-1-of-4">
                        <div className="blog-box">
                            <h3 className="blog-box__title">{blog.title}</h3>
                            <p className="blog-box__date">{blog.date}</p>
                            <p className="blog-box__content">{blog.content}</p>
                            <a href={blog.link} className="blog-box__link">Read More &rarr;</a>
                        </div>
                    </div>
                ))}             
            </div>
        </section>
    )   
}