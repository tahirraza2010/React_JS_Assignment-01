// import React from 'react';
import ReactDOM from "react-dom/client";

const rootDiv = document.getElementById("root");
ReactDOM.createRoot(rootDiv).render(
  <div>
    <h1>Hello, world!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, dicta
      impedit. Quas nostrum et, ipsam, eveniet a nam praesentium iste odit magni
      doloremque doloribus, inventore deserunt? Optio, eum excepturi laboriosam
      corporis exercitationem repellendus velit reprehenderit dolore dolores
      fugit incidunt similique mollitia nobis labore. Officia nobis praesentium
      laudantium iure beatae vel doloremque non et sapiente dolor cupiditate
      deserunt earum, iste porro nulla fugiat dolores eos modi rerum? Nesciunt
      dolor amet eveniet dolorem nam libero numquam unde et earum sed, quia hic
      nulla architecto consectetur omnis aspernatur vero qui officiis rem quam
      sunt in exercitationem iusto debitis. Illum, accusantium adipisci.
      Suscipit modi, voluptas perspiciatis sequi officia provident nesciunt
      ducimus laborum voluptatum omnis aut, vitae odio excepturi doloribus.
      Fugiat accusamus beatae, maiores repellat aut veritatis suscipit atque
      quis placeat deserunt enim ratione facere officiis itaque qui inventore
      corrupti voluptatibus similique libero pariatur odio autem? Ipsam, odit!
      Eligendi repellendus suscipit modi quo nihil cum perferendis, deserunt
      voluptatem facere ducimus illo obcaecati a nam incidunt tenetur possimus,
      placeat blanditiis quasi aut! Officiis vel asperiores obcaecati mollitia
      non magnam, tempore ipsam in! Cumque facilis culpa aspernatur, debitis
      suscipit repudiandae sit dolor maiores nobis doloremque. Hic autem
      temporibus ipsa dolorem fugit sapiente nemo voluptas perferendis facilis
      minima.
    </p>
    <img style={{width:'100px'}} src="/public/vite.svg" alt="" />
    <img style={{width:'100px'}} src="/src/assets/react.svg" alt="" />
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Header Section */}
      <header style={{ backgroundColor: '#282c34', color: 'white', padding: '10px' }}>
        <h1>Welcome to My React App</h1>
        <p>Explore React components and elements!</p>
      </header>

      {/* Main Section */}
      <main style={{ marginTop: '20px' }}>
        {/* Text and List */}
        <section>
          <h2>Features of React</h2>
          <ul style={{ listStyleType: 'square', textAlign: 'left', display: 'inline-block' }}>
            <li>Reusable Components</li>
            <li>Virtual DOM</li>
            <li>Fast and Scalable</li>
          </ul>
        </section>

        {/* Images Section */}
        <section style={{ marginTop: '30px' }}>
          <h2>React Fun Images</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
            {/* Image 1 */}
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder 1"
              style={{ border: '2px solid #ccc', borderRadius: '10px' }}
            />
            {/* Image 2 */}
            <img
              src="https://via.placeholder.com/150/0000FF/808080?text=React+Image+2"
              alt="Placeholder 2"
              style={{ border: '2px solid #ccc', borderRadius: '10px' }}
            />
            {/* Image 3 */}
            <img
              src="https://via.placeholder.com/150/FF0000/FFFFFF?text=React+Image+3"
              alt="Placeholder 3"
              style={{ border: '2px solid #ccc', borderRadius: '10px' }}
            />
          </div>
        </section>

        {/* Form Section */}
        <section style={{ marginTop: '30px' }}>
          <h2>Subscribe to our Newsletter</h2>
          <form style={{ marginTop: '10px' }}>
            <input
              type="text"
              placeholder="Enter your name"
              style={{ padding: '10px', marginRight: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <input
              type="email"
              placeholder="Enter your email"
              style={{ padding: '10px', marginRight: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#282c34',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ marginTop: '40px', color: '#555' }}>
        <p>&copy; 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  {/* );
}; */}
  </div>
);
