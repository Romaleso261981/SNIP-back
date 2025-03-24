import type { Schema, Struct } from '@strapi/strapi';

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface UiExample extends Struct.ComponentSchema {
  collectionName: 'components_ui_examples';
  info: {
    description: '';
    displayName: 'Example';
    icon: 'folder';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    secondaryDescription: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiGallery extends Struct.ComponentSchema {
  collectionName: 'components_ui_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'apps';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface UiGuide extends Struct.ComponentSchema {
  collectionName: 'components_ui_guides';
  info: {
    description: '';
    displayName: 'Guide';
  };
  attributes: {
    description: Schema.Attribute.String;
    gif: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videoSrc: Schema.Attribute.String;
  };
}

export interface UiHero extends Struct.ComponentSchema {
  collectionName: 'components_ui_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.String;
    secondaryDescription: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_order_items';
  info: {
    description: '';
    displayName: 'OrderItem';
  };
  attributes: {
    name: Schema.Attribute.String;
    price: Schema.Attribute.BigInteger;
    productId: Schema.Attribute.String;
    quantity: Schema.Attribute.BigInteger;
  };
}

export interface UiTextArray extends Struct.ComponentSchema {
  collectionName: 'components_ui_text_arrays';
  info: {
    displayName: 'TextArray';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface UiTextSection extends Struct.ComponentSchema {
  collectionName: 'components_ui_text_sections';
  info: {
    description: '';
    displayName: 'TextSection';
    icon: 'layout';
  };
  attributes: {
    bottomText: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui.button': UiButton;
      'ui.example': UiExample;
      'ui.gallery': UiGallery;
      'ui.guide': UiGuide;
      'ui.hero': UiHero;
      'ui.order-item': UiOrderItem;
      'ui.text-array': UiTextArray;
      'ui.text-section': UiTextSection;
    }
  }
}
