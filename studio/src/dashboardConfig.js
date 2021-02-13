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
                  buildHookId: '60276f6e25e903acfcfc9570',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jizf2zr7',
                  apiId: '97d5aa93-4c5a-40ac-9ce7-34d9f57274c3'
                },
                {
                  buildHookId: '60276f6ef649919a163a10cc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-edtan9ag',
                  apiId: '73768e70-0634-4926-8d70-d7c9675cbb3f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/InspectorClick/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-edtan9ag.netlify.app', category: 'apps' }
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
