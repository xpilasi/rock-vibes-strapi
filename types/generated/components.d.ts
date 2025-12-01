import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleAuthor extends Struct.ComponentSchema {
  collectionName: 'components_article_authors';
  info: {
    description: 'Author information for articles';
    displayName: 'Author';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    bio: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Staff Writer'>;
    socialLinks: Schema.Attribute.Component<'article.social-link', true>;
  };
}

export interface ArticleSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_article_social_links';
  info: {
    description: 'Social media link for authors';
    displayName: 'Social Link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['twitter', 'linkedin', 'instagram', 'facebook', 'website']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.author': ArticleAuthor;
      'article.social-link': ArticleSocialLink;
    }
  }
}
