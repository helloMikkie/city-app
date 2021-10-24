import './ExploreContainer.css';
import _Card from './Card';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <_Card 
        subtitle="Ausstellung" 
        title="HAns" 
        content="
        Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.
          ">
      </_Card>
     
    </div>
  );
};

export default ExploreContainer;
