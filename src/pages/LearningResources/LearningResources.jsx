import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
import TertiaryButton from '../../components/TertiaryButton';
import ResourceCard from '../../components/ResourceCard';
import {
  MainContainer,
  PageTitle,
  ListContainer,
  FilterContainer
} from './LearningResources.styles';
import Filter from '../../components/Filter';
import List from '../../components/List';
import Spinner from '../../components/Spinner';
import Select from '../../components/Select';

const items = require('../../data/products.json');
// TODO Import list component/filter component

const LearningResources = () => {
  // set and setState being initialized
  const [products, setProducts] = useState(items);
  const [category, setCategory] = useState('all');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  // e = event for the value when select changes
  const handleFilterChange = (e, filterType) => {
    // changes state
    switch (filterType) {
      case 'category':
        setCategory(e.target.value);
        break;
      case 'min':
        setMin(e.target.value);
        break;
      case 'max':
        setMax(e.target.value);
        break;
      default:
        break;
    }
  };
  // initial render then updates when state/criteria is changed
  useEffect(() => {
    let filteredProducts = items;

    if (category !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }
    if (min !== '') {
      filteredProducts = filteredProducts.filter(
        (product) => product.price > min
      );
    }
    if (max !== '') {
      filteredProducts = filteredProducts.filter(
        (product) => product.price < max
      );
    }
    setProducts(filteredProducts);
    // variable being listened for change
  }, [category, min, max]);

  const [resourceData, setResourceData] = useState();

  const getResourceData = async () => {
    const res = await axios.get('/learningResources');
    setResourceData(res.data.data);
  };

  useEffect(() => {
    getResourceData();
  }, []);

  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Learning Resources</PageTitle>
        <>
          <form className="filter">
            <div>
              {' '}
              <Select
                id="category"
                name="category"
                label="Select ages"
                placeholder="Example value"
                options={[
                  { value: 'all', label: 'All' },
                  { value: 'pant', label: 'Pants' },
                  { value: 'dress', label: 'dresses' }
                ]}
                onBlur={(e) => handleFilterChange(e, 'category')}
              />
              <label htmlFor="category">
                Choose a category:
                <select
                  name="category"
                  id="category"
                  onBlur={(e) => handleFilterChange(e, 'category')}
                >
                  {' '}
                  {/* listens for when input field is changed */}
                  <option value="all">All</option>
                  <option value="jacket">Jackets</option>
                  <option value="jean">Jeans</option>
                  <option value="pant">Pants</option>
                  <option value="dress">Dresses</option>
                  <option value="shoe">Shoes</option>
                  <option value="sock">Socks</option>
                  <option value="swimwear">Swimwear</option>
                  <option value="handbag">Hand Bag</option>
                  <option value="formalwear">Formal Wear</option>
                  <option value="sweater">Sweater</option>
                  <option value="hat">Hats</option>
                  <option value="baby">Baby</option>
                </select>
              </label>
            </div>

            <input
              type="number"
              name="minPrice"
              onChange={(e) => handleFilterChange(e, 'min')}
              placeholder="Min Price"
            />
            <input
              type="number"
              name="maxPrice"
              onChange={(e) => handleFilterChange(e, 'max')}
              placeholder="Max Price"
            />
          </form>
          <div className="master--card">
            {/* state */}
            {products.map((item, key) => {
              const { id } = key;
              return (
                <div className="card" key={id}>
                  <h2 className="title">{item.title}</h2>
                  <img src={item.cover} alt={item.title} />

                  <p>Polo Ralph Lauren</p>
                  <p className="description">{item.description}</p>
                  <p className="price">${item.price}</p>
                </div>
              );
            })}
          </div>
        </>
        <FilterContainer>
          <Filter />
        </FilterContainer>

        {resourceData ? (
          <>
            <ListContainer>
              <List Component={ResourceCard} data={resourceData} />
            </ListContainer>
          </>
        ) : (
          <Spinner />
        )}

        <TertiaryButton content="Show more" type="button" />
      </MainContainer>
    </DefaultPageLayout>
  );
};

export default LearningResources;
