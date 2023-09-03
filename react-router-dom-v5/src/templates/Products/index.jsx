import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Products = () => {
  const { category, id } = useParams();
  if (!category && !id) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFF380',
          height: '90vh',
        }}
      >
        <h1 style={{ margin: '0' }}>
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '48px',
            }}
          >
            &#128511;
          </p>
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Any product can be displayed without a category and/or id
          </p>
          <p
            style={{
              border: '5px dashed black',
              padding: '1rem',
              background: '#b2c248',
            }}
          >
            To see the category of the product, digit something like:
            /products/some-category
            <br />
            To see the category and the id of the product, digit something like:
            /products/some-category/some-id
          </p>
        </h1>
      </div>
    );
  } else if (category && !id) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFF380',
          height: '90vh',
        }}
      >
        <h1 style={{ margin: '0' }}>
          Product Information: <br />
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '48px',
            }}
          >
            &#9989;
          </p>
          <ul>
            <li>Category - {category}</li>
            <li>
              Id - <span style={{ color: 'red' }}>Not passed</span>
            </li>
          </ul>
        </h1>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFF380',
          height: '90vh',
        }}
      >
        <h1 style={{ margin: '0' }}>
          Product Information: <br />
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '48px',
            }}
          >
            &#9989;
          </p>
          <ul>
            <li>Category - {category}</li>
            <li>Id - {id}</li>
          </ul>
        </h1>
      </div>
    );
  }
};
