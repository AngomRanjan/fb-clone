import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        title="Microverse"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmicroverseinc%2F&tabs=timeline&width=250&height=1500&small_header=true&adapt_container_width=true&hide_cover=false&snow_facepile=true&appId"
        width="250px" height="1500px"
        style={{ border: "none", overflow: "visible" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
    </div>
  )
}

export default Widgets;

