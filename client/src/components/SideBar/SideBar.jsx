import { Countries, ProgrammingLanguages } from "./data"
import './SideBar.scss'

export default function sideBar (){
    const sidebarHeader = document.querySelector(".sidebar-header");
    const sidebarContent = document.querySelector(".sidebar-content");

    sidebarHeader.addEventListener("click", () => {
        sidebarContent.classList.toggle("open");
    });

    return (
        <div class="sidebar">
        <div class="sidebar-header">
            <i class="fas fa-bars"></i>
        </div>
        <div class="sidebar-content">
            <p class="sidebar-title">I'm looking for:</p>
            <div class="options-container">
            <div class="option-group">
                <div class="option-item advisor">Advisor</div>
                <div class="option-item developer">Freelance Developer</div>
            </div>
            <div class="option-group">
                <div class="option-item english">English</div>
                <div class="option-item spanish">Spanish</div>
            </div>
            </div>
            <p class="sidebar-title">Programming language:</p>
            <select class="sidebar-select">
                {ProgrammingLanguages.map((item, index)=>{
                    return <option key={index}>{item}</option>
                })}
            </select>
            <p class="sidebar-title">Country:</p>
            <select class="sidebar-select">
                {Countries.map((item, index)=>{
                    return <option key={index}>{item}</option>
                })}
            </select>
            <p class="sidebar-title">Filter by:</p>
                <div class="options-container">
                <div class="option-item score">Best Score</div>
                <div class="option-item availability">Most Available</div>
                <div class="option-item affordability">More Affordable</div>
            </div>
        </div>
        </div>
    )
}