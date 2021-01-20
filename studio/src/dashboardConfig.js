export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60086d42e474c644f20d09d2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1kzpzkak',
                  apiId: 'efa9f9a4-bcbd-4f5a-8d74-7c9522c9065c'
                },
                {
                  buildHookId: '60086d425be5f44488889192',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-nrjaapf7',
                  apiId: 'fecbe2b1-ff34-42f4-91b6-ba095ba20bbf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vianoce/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-nrjaapf7.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
