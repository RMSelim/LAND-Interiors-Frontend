import "./Blog.css";
import modInterior from "../images/modInterior.png";
import extProject from "../images/extProject.png";
import grey from "../images/grey.png";
import plantInterior from "../images/plantInterior.png";
import furniture from "../images/furniture.png";

function Blog() {
  return (
    <>
      <div className="blog">
        <h1>Blogs</h1>
        <ul>
          <li>
            <img src={modInterior} alt="" /> <br />
            <h2>Modern Interior</h2> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </p>
          </li>

          <li>
            <img src={extProject} alt="" /> <br />
            <h2>Exterior Project</h2> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </p>
          </li>

          <li>
            <img src={grey} alt="" /> <br />
            <h2>Grey Beauty</h2> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </p>
          </li>

          <li>
            <img src={plantInterior} alt="" /> <br />
            <h2>Plantation interior</h2> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </p>
          </li>

          <li>
            <img src={furniture} alt="" /> <br />
            <h2>Role of furnitures</h2> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </p>
          </li>
        </ul>
        <button>View All</button>
      </div>
    </>
  );
}

export default Blog;
