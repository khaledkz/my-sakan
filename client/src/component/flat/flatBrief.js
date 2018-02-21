import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
       
      <Card body className="text-center">
        <CardTitle>{this.props.title}</CardTitle>
        <CardText>{this.props.subtitle}</CardText>
        <Button>Full Discribtion</Button>
      </Card>
      
    </div>
  );
};

export default Example;