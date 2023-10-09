import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionImageGrid extends Schema.Component {
  collectionName: 'components_section_image_grids';
  info: {
    displayName: 'Image_Grid';
    icon: 'picture';
  };
  attributes: {
    Image: Attribute.Media & Attribute.Required;
  };
}

export interface SectionSectionGrid extends Schema.Component {
  collectionName: 'components_section_section_grids';
  info: {
    displayName: 'Section_Grid';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    Text_Grid: Attribute.Component<'section.text-grid', true>;
    Image_Grid: Attribute.Component<'section.image-grid', true>;
    Metadata: Attribute.Component<'section.section-metadata'> &
      Attribute.Required;
  };
}

export interface SectionSectionMetadata extends Schema.Component {
  collectionName: 'components_section_section_metadata';
  info: {
    displayName: 'Section_Metadata';
    icon: 'apps';
  };
  attributes: {
    Name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }>;
    Section_Id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionSectionTwoColumns extends Schema.Component {
  collectionName: 'components_section_section_two_columns';
  info: {
    displayName: 'Section_Two_Columns';
    icon: 'bulletList';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }>;
    Description: Attribute.Text & Attribute.Required;
    Image: Attribute.Media & Attribute.Required;
    Metadata: Attribute.Component<'section.section-metadata'> &
      Attribute.Required;
  };
}

export interface SectionTextGrid extends Schema.Component {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'Text-Grid';
    icon: 'pencil';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'section.image-grid': SectionImageGrid;
      'section.section-grid': SectionSectionGrid;
      'section.section-metadata': SectionSectionMetadata;
      'section.section-two-columns': SectionSectionTwoColumns;
      'section.text-grid': SectionTextGrid;
    }
  }
}
