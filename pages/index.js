import React, { useState } from 'react';

import { Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import ShopList from '../components/ShopList';

function Home() {
  const [query, updateQuery] = useState('');
  return (
    <div className='container-fluid'>
      <Row>
        <Col>
          <div className='search'>
            <InputGroup>
              <InputGroupAddon addonType='append'> Search </InputGroupAddon>
              <Input
                onChange={(e) =>
                  updateQuery(e.target.value.toLocaleLowerCase())
                }
                value={query}
              />
            </InputGroup>
          </div>
          <ShopList search={query} />
        </Col>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </div>
  );
}
export default Home;
