import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
import TertiaryButton from '../../components/TertiaryButton';
import ResourceCard from '../../components/ResourceCard';
import {
  MainContainer,
  PageTitle,
  ListContainer,
  FilterContainer,
  FilterWrapper,
  SelectWrapper,
  FilterText,
  Form
} from './LearningResources.styles';
// import Filter from '../../components/Filter';
import List from '../../components/List';
import Spinner from '../../components/Spinner';
import Select from '../../components/Select';

const items = require('../../data/products.json');
// TODO Import list component/filter component

const LearningResources = () => {
  // const [resourceData, setResourceData] = useState();

  // const getResourceData = async () => {
  //   const res = await axios.get(
  //     'https://api.jsonbin.io/b/61965f820ddbee6f8b0e2811'
  //   );
  //   setResourceData(res.data.data);
  // };

  //* set and setState being initialized
  const [resourceData, setResourceData] = useState(items);
  const [ages, setAges] = useState('');
  const [topics, setTopics] = useState('');
  const [category, setCategory] = useState('all');
  const [categoryTwo, setCategoryTwo] = useState('all');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  // e = event for the value when select changes
  const handleFilterChange = (e, filterType) => {
    // changes state
    switch (filterType) {
      case 'category':
        setCategory(e.target.value);
        break;
      case 'categoryTwo':
        setCategoryTwo(e.target.value);
        break;
      case 'min':
        setMin(e.target.value);
        break;
      case 'max':
        setMax(e.target.value);
        break;
      case 'ages':
        setAges(e.target.value);
        break;
      case 'topics':
        setTopics(e.target.value);
        break;
      default:
        break;
    }
  };
  // initial render then updates when state/criteria is changed
  useEffect(() => {
    let filteredData = items;

    if (category !== 'all') {
      filteredData = filteredData.filter(
        (product) => product.category === category
      );
    }
    if (categoryTwo !== 'all') {
      filteredData = filteredData.filter(
        (product) => product.category === categoryTwo
      );
    }
    if (ages !== '') {
      filteredData = filteredData.filter((product) => product.ages === ages);
    }
    if (topics !== '') {
      filteredData = filteredData.filter(
        (product) => product.category === topics
      );
    }
    if (min !== '') {
      filteredData = filteredData.filter((product) => product.price > min);
    }
    if (max !== '') {
      filteredData = filteredData.filter((product) => product.price < max);
    }
    setResourceData(filteredData);
    // variable being listened for change
  }, [category, categoryTwo, min, max, ages, topics]);

  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Learning Resources</PageTitle>

        <>
          <FilterContainer>
            <FilterWrapper>
              <FilterText>Filter</FilterText>
              <SelectWrapper>
                <Select
                  name="Age Group"
                  id="ages"
                  label="Age group"
                  placeholder="Age group"
                  options={[
                    { value: '6-18', label: '6-18 years' },
                    { value: '6-12', label: '6-12 years' },
                    { value: '12-18', label: '12-18 years' }
                  ]}
                  onChange={(e) => handleFilterChange(e, 'ages')}
                />
              </SelectWrapper>
              <SelectWrapper>
                <Select
                  name="Any topic"
                  id="topic"
                  label="Topic"
                  placeholder="Any topic"
                  options={[
                    { value: 'coding', label: 'Coding' },
                    { value: 'maths', label: 'Maths' },
                    { value: 'electronics', label: 'Electronics' }
                  ]}
                  onChange={(e) => handleFilterChange(e, 'topics')}
                />
              </SelectWrapper>
            </FilterWrapper>
          </FilterContainer>
          <Form className="filter">
            <div>
              {' '}
              <Select
                name="Age Group"
                id="ages"
                label="Age group"
                placeholder="Age group"
                options={[
                  { value: '6-18', label: '6-18 years' },
                  { value: '6-12', label: '6-12 years' },
                  { value: '12-18', label: '12-18 years' }
                ]}
                onChange={(e) => handleFilterChange(e, 'ages')}
              />
              <Select
                name="Any topic"
                id="topic"
                label="Topic"
                placeholder="Any topic"
                options={[
                  { value: 'Coding', label: 'Coding' },
                  { value: 'Maths', label: 'Maths' },
                  { value: 'Electronics', label: 'Electronics' }
                ]}
                onChange={(e) => handleFilterChange(e, 'topics')}
              />
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
                onChange={(e) => handleFilterChange(e, 'category')}
              />
              <Select
                id="category"
                name="category"
                label="Select ages"
                placeholder="Example value"
                options={[
                  { value: '22', label: '22' },
                  { value: '55', label: '55' },
                  { value: '477', label: '477' }
                ]}
                onChange={(e) => handleFilterChange(e, 'min')}
              />
              <Select
                id="age"
                name="age"
                label="Age group"
                placeholder="Age group"
                options={[
                  { value: '16-18', label: '16-18' },
                  { value: '55', label: '55' },
                  { value: '477', label: '477' }
                ]}
                onChange={(e) => handleFilterChange(e, 'ages')}
              />
              {/* listens for when input field is changed */}
              <Select
                id="topic"
                name="topic"
                label="Topic"
                placeholder="Any topic"
                options={[
                  { value: 'Coding', label: 'Coding' },
                  { value: 'Maths', label: 'Maths' },
                  { value: 'Electronics', label: 'Electronics' }
                ]}
                onChange={(e) => handleFilterChange(e, 'topics')}
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
          </Form>
          <div className="master--card">
            {/* state */}
            {resourceData.map((item, key) => {
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
        <FilterContainer />

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
