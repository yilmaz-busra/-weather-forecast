import "./App.css";

function App() {
  return (
    <div className="App">
      <video className="bg-video" autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + "/hava.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        {/* Diğer içerikler buraya gelecek */}
        <h1>Hava Durumu Uygulaması</h1>
        {/* HavaDurumu bileşeniniz burada yer alabilir */}
      </div>
    </div>
  );
}

export default App;
