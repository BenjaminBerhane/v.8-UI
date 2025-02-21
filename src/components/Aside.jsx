const newsArticles = [
  {
    id: 1,
    title: 'Apple announces new iPhone 14 Pro',
     paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    
  },
  {
    id:2,
    title: 'Google announces new Android 13 features',
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id:3, 
    title: 'Tesla announces new Cybertruck',
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
]

export default function Aside() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {newsArticles.map((article) => (
        <li key={article.id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={article.imageUrl} className="size-12 flex-none  bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{article.title}</p>
            </div>
          </div>

          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            
            {article.lastSeen ? (
              <p className="mt-1 text-xs/5 text-gray-500">
                {article.paragraph}
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
