import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedServiceItem extends Schema.Component {
  collectionName: 'components_shared_service_items';
  info: {
    displayName: 'Service item';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.String & Attribute.Required;
    serviceIcon: Attribute.Media & Attribute.Required;
    article: Attribute.Relation<
      'shared.service-item',
      'oneToOne',
      'api::article.article'
    >;
  };
}

export interface SharedServiceItmes extends Schema.Component {
  collectionName: 'components_shared_service_itmes';
  info: {
    displayName: 'Service itmes';
    icon: 'bulletList';
  };
  attributes: {
    items: Attribute.Component<'shared.service-item', true>;
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.service-item': SharedServiceItem;
      'shared.service-itmes': SharedServiceItmes;
      'shared.slider': SharedSlider;
    }
  }
}
