import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';

import Map from './Map';

const MapsCard = () => (
  <Card>
    <CardHeader
      title="A Great Title"
      subtitle="A Better Subtitle"
    />
    <Map />
  </Card>
);

export default MapsCard;
