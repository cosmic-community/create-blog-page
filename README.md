# Create Blog Page

![App Preview](https://imgix.cosmicjs.com/5ea6e4f0-73a5-11f1-a87f-d72293b1048a-autopilot-photo-1505664194779-8beaceb93744-1782728951979.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and responsive blog application built with Next.js 16 and [Cosmic](https://www.cosmicjs.com). It displays blog posts managed in your Cosmic bucket with a clean homepage listing and individual post pages featuring rich content with anchor links, featured images, author details, and publish dates.

## Features

- 📝 Dynamic blog homepage listing all posts
- 📄 Individual blog post pages with rich content rendering
- 🔗 Markdown content with anchor/hyperlink support
- 🖼️ Optimized featured images via imgix
- 👤 Author and published date display
- 📱 Fully responsive, modern design
- ⚡ Server-side rendering for fast performance and SEO
- 🎨 Tailwind CSS with Typography plugin for beautiful prose

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a4248cb5a70784f2710bb9f&clone_repository=6a4249705a70784f2710bbb9)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: create a blog page with anchor text i'll give you content &title-
> title-How Cohabitation and Remarriage Impact Existing Spousal Support
>
> content-
> The finalisation of a marital settlement brings a sense of closure, but financial obligations between former spouses often continue for years through spousal support payments. These payments are calculated based on the financial circumstances present at the exact time the marriage ends. However, people naturally move on, form new relationships, and rebuild their lives. When a receiving spouse enters a new serious relationship, the financial dynamics that originally justified the support order frequently change. Understanding how new living arrangements and subsequent marriages affect existing support obligations is necessary for both the person making the payments and the person receiving them.
>
> The most definitive event that alters a support obligation is the remarriage of the receiving spouse. In almost all jurisdictions, unless the original settlement agreement explicitly states otherwise, the obligation to pay support terminates automatically on the date the receiving spouse legally remarries. The paying spouse does not necessarily need a court order to stop writing the cheques, though filing a formal notice with the court is always the safest administrative practice. The legal reasoning is straightforward: the new spouse assumes the financial responsibility for their partner, relieving the former spouse of that burden.
>
> Cohabitation, however, presents a much more complex legal scenario. When a receiving spouse moves in with a new partner without legally marrying, the support does not terminate automatically. Instead, the law presumes that the receiving spouse has a decreased need for financial assistance because they are now sharing living expenses, such as rent, utilities, and groceries, with their new partner. To reduce or terminate the payments based on cohabitation, the paying spouse must file a formal motion with the court and provide concrete evidence that a supportive relationship exists.
>
> Proving cohabitation requires the expertise of a dedicated [this is keyword Alimony Lawyer](this is hyperlink https://josfamilylaw.com/divorce.php) to gather and present compelling factual evidence. Simply proving that the former spouse is dating or occasionally spending the night with someone is not sufficient. The court looks for evidence of a shared household and financial interdependence. Binoye Jos assists clients in compiling the necessary documentation, which may involve analysing social media posts, public records, and financial disclosures to demonstrate that the new couple is functioning economically like a married unit. This meticulous gathering of facts is the only way to successfully petition for a reduction in payments.
>
> The court examines several specific factors to determine if a relationship qualifies as cohabitation. These include the sharing of a permanent residence, the commingling of finances in joint bank accounts, the joint purchase of property or vehicles, and the assumption of household duties by both individuals. The length and continuous nature of the relationship also play a significant part in the judge's evaluation. If the evidence clearly shows a reduction in financial need due to this shared arrangement, the judge has the authority to significantly lower the monthly support amount or terminate it entirely.
>
> For the receiving spouse, understanding these rules is critical before making the decision to move in with a new partner. The financial benefits of sharing a home must be weighed against the highly probable loss of monthly support income. Attempting to hide a cohabitation arrangement from a former spouse is a high-risk strategy that often backfires. If the court discovers that a receiving spouse intentionally concealed their living situation while continuing to collect full support payments, they can be ordered to repay the excess funds received during the cohabitation period, often with added interest.
>
> If the cohabitating relationship eventually ends and the individuals move into separate residences, the receiving spouse may attempt to have their original support payments reinstated. However, this is not an automatic process and requires filing a new petition, forcing the court to re-evaluate their current financial need. Managing post-separation financial obligations requires transparency and a clear understanding of the legal consequences attached to new relationships. Basing decisions on factual legal parameters prevents unexpected financial shocks down the road."

### Code Generation Prompt

> Build a Next.js application for a website called "Create blog page". The content is managed in Cosmic CMS with the following object types: blog-posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account and bucket with `blog-posts` content

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (these are provided automatically by Cosmic):

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your blog.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all blog posts
const response = await cosmic.objects
  .find({ type: 'blog-posts' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

const posts = response.objects

// Fetch a single post by slug
const { object } = await cosmic.objects
  .findOne({ type: 'blog-posts', slug: 'my-post-slug' })
  .depth(1)
```

## Cosmic CMS Integration

This application uses the [Cosmic SDK](https://www.cosmicjs.com/docs) to fetch content from your bucket. The `blog-posts` object type includes:

- **title** - The post title
- **excerpt** - A short summary
- **content** - The full post body (markdown)
- **featured_image** - The hero image
- **author** - The post author
- **published_date** - The publish date

Learn more in the [Cosmic documentation](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)

1. Push your code to a Git repository
2. Import the project in [Vercel](https://vercel.com)
3. Add your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Deploy

### Netlify

1. Push your code to a Git repository
2. Import the project in [Netlify](https://netlify.com)
3. Add your environment variables in Site Settings
4. Deploy

<!-- README_END -->