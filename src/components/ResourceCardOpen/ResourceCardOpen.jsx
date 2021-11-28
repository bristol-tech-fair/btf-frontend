import React from 'react';
import DefaultPageLayout from '../SharedComponents/Layout/DefaultPageLayout';
import { Large } from '../SharedComponents/Banners';

const ResourceCardOpen = () => {
  return (
    <>
      <DefaultPageLayout>
        <Large />
        <p>category</p>
        <h1>title</h1>
        <div>
          <p>ages</p>
          <div>Icon rating with click counter</div>
        </div>
        <p>Description</p>
        <button type="button">primary button</button>
        <div>
          <div>Tags</div>
          <div>icon links</div>
        </div>
        <div>
          <p>rate resource with icon</p>
          <p>email support</p>
          <div>
            <p>Add new resource</p>
            <button type="button">Secondary button</button>
          </div>
          <div>
            <p>nav-link back</p>
            <p>nav-link next resource</p>
          </div>
        </div>
      </DefaultPageLayout>
    </>
  );
};

export default ResourceCardOpen;
