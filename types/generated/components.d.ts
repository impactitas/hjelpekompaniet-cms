import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedActionButton extends Schema.Component {
  collectionName: 'components_shared_action_buttons';
  info: {
    displayName: 'actionButton';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['primary', 'secondary']>;
    path: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
  };
}

export interface SharedBanner extends Schema.Component {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
    icon: 'message';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
    backgroundImage: Attribute.Media & Attribute.Required;
    actionButton: Attribute.Component<'shared.action-button'>;
  };
}

export interface SharedContactForm extends Schema.Component {
  collectionName: 'components_shared_contact_forms';
  info: {
    displayName: 'ContactForm';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
    phone: Attribute.String;
    email: Attribute.String;
    streetName: Attribute.String;
    city: Attribute.String;
    postalCode: Attribute.String;
    contactFormText: Attribute.Text;
    contactFormTitle: Attribute.String;
  };
}

export interface SharedEmployees extends Schema.Component {
  collectionName: 'components_shared_employees';
  info: {
    displayName: 'Employees';
    icon: 'emotionHappy';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
  };
}

export interface SharedFagItem extends Schema.Component {
  collectionName: 'components_shared_fag_items';
  info: {
    displayName: 'fagItem';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface SharedFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
    items: Attribute.Component<'shared.fag-item', true>;
  };
}

export interface SharedFeatureItems extends Schema.Component {
  collectionName: 'components_shared_feature_items';
  info: {
    displayName: 'FeatureItems';
    icon: 'bulletList';
  };
  attributes: {
    items: Attribute.Component<'shared.featured-item', true>;
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
  };
}

export interface SharedFeaturedItem extends Schema.Component {
  collectionName: 'components_shared_featured_items';
  info: {
    displayName: 'FeaturedItem';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
    serviceIcon: Attribute.Media & Attribute.Required;
    article: Attribute.Relation<
      'shared.featured-item',
      'oneToOne',
      'api::article.article'
    >;
  };
}

export interface SharedHero extends Schema.Component {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    shortDescription: Attribute.Text;
    backgroundImage: Attribute.Media & Attribute.Required;
    actionButtons: Attribute.Component<'shared.action-button', true>;
  };
}

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

export interface SharedMenuItems extends Schema.Component {
  collectionName: 'components_shared_menu_items';
  info: {
    displayName: 'menuItems';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    path: Attribute.String & Attribute.Required;
  };
}

export interface SharedParagraph extends Schema.Component {
  collectionName: 'components_shared_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
    containerSize: Attribute.Enumeration<['small', 'large']> &
      Attribute.DefaultTo<'large'>;
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

export interface SharedReferenceItem extends Schema.Component {
  collectionName: 'components_shared_reference_items';
  info: {
    displayName: 'referenceItem';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    article: Attribute.Relation<
      'shared.reference-item',
      'oneToOne',
      'api::article.article'
    >;
  };
}

export interface SharedReferences extends Schema.Component {
  collectionName: 'components_shared_references';
  info: {
    displayName: 'references';
    icon: 'crown';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.Text & Attribute.Required;
    referenceItem: Attribute.Component<'shared.reference-item', true>;
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

export interface SharedTitle extends Schema.Component {
  collectionName: 'components_shared_titles';
  info: {
    displayName: 'title';
    icon: 'filter';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['h1', 'h2', 'h3']>;
    containerSize: Attribute.Enumeration<['small', 'largre']> &
      Attribute.DefaultTo<'largre'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.action-button': SharedActionButton;
      'shared.banner': SharedBanner;
      'shared.contact-form': SharedContactForm;
      'shared.employees': SharedEmployees;
      'shared.fag-item': SharedFagItem;
      'shared.faq': SharedFaq;
      'shared.feature-items': SharedFeatureItems;
      'shared.featured-item': SharedFeaturedItem;
      'shared.hero': SharedHero;
      'shared.media': SharedMedia;
      'shared.menu-items': SharedMenuItems;
      'shared.paragraph': SharedParagraph;
      'shared.quote': SharedQuote;
      'shared.reference-item': SharedReferenceItem;
      'shared.references': SharedReferences;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.service-item': SharedServiceItem;
      'shared.service-itmes': SharedServiceItmes;
      'shared.slider': SharedSlider;
      'shared.title': SharedTitle;
    }
  }
}
