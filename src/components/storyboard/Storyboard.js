import "./Storyboard.css"
import Story from './Story';

const Storyboard = () => {
  return (
    <div className="storyBoard">
      <Story
      image="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
      profileSrc="https://avatars.githubusercontent.com/u/99433451?v=4"
      title="Angom"
      />
      <Story
      image="https://images.freeimages.com/images/previews/3c2/little-roberto-and-vitoria-1177528.jpg"
      profileSrc="https://avatars.githubusercontent.com/u/99269832?v=4"
      title="Thomas"
      />
      <Story
      image="https://www.shutterbug.com/images/styles/600_wide/public/How-to-Shoot-Concert-Photography-Pro-Tips_0.jpg"
      profileSrc="https://avatars.githubusercontent.com/u/99729850?v=4"
      title="Natneal"
      />
      <Story
      image="https://miro.medium.com/max/700/0*XH3rLskyOsCqVV-j.jpg"
      profileSrc="https://avatars.githubusercontent.com/u/99433451?v=4"
      title="Angom"
      />
      <Story
      image="http://im.rediff.com/movies/2013/sep/02pic1.jpg"
      profileSrc="https://avatars.githubusercontent.com/u/66992901?v=4"
      title="Sajid"
      />
    </div>
  )
}

export default Storyboard;
