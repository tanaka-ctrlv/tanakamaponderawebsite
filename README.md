# Tanaka Mapondera - portfolio website

Ready to publish with GitHub Pages at **tanakamapondera.com**.

## Publish on GitHub

1. Extract the ZIP on your computer.
2. Create a new repository for the portfolio, or open the repository you want to use. A public repository works with GitHub Free.
3. Upload the extracted **contents** to the repository's main folder, including the `assets` folder. Upload the files, not the ZIP. `index.html` should appear on the repository's main page, without a surrounding `dist` or export folder.
4. Open **Settings > Pages**. Choose **Deploy from a branch**, then select **main** and **/(root)**. Save. If your branch has another name, select that branch instead.
5. In the same Pages settings, set **Custom domain** to `tanakamapondera.com` and save. The included `CNAME` file contains this domain too.
6. Configure the domain's DNS using the table below. Set the domain in GitHub before changing DNS.
7. When the domain check and certificate are ready, enable **Enforce HTTPS** in Pages settings. DNS and certificates can take up to 24 hours to settle.

No installation or build command is required. GitHub publishes updates when you commit changes to the selected branch.

## Connect your domain

At the company managing your domain's DNS, enter these website records:

| Type | Name / Host | Value / Target |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

For the last row, replace `YOUR-GITHUB-USERNAME` with your actual GitHub username. Use the account's Pages hostname, with no `https://` or repository path. The exact screens and handling of existing records depend on your DNS provider; review the current records before replacing a website target.

These values are for GitHub Pages. Once you choose GitHub as the host, use these rather than the DNS targets for the earlier ChatGPT-hosted copy.

## Edit your website

- `index.html`: introduction, construction message, and contact links.
- `styles.css`: typography, spacing, colors, and responsive layout. The main colors are at the top.
- `projects.js`: your project list. The Selected work section appears after you add a project.
- `site.js`: renders the project list.
- `favicon.svg`: browser-tab icon.
- `assets/Tanaka_Mapondera_Graphic_Design_Projects.pdf`: the smaller web copy of your GD index.
- `CNAME`: the domain GitHub Pages will use.

## Add your first six projects

1. Create an `images` folder alongside `index.html`.
2. Add compressed JPG, PNG, or WebP project images.
3. Open `projects.js` and follow the commented example. Add one object per project inside the square brackets. Use paths like `images/project-01.jpg`.
4. Include an image description in each project's `alt` field. A project URL is optional.
5. Update the construction message in `index.html` when the work is ready.
6. Commit the changed files and images to your publishing branch.

## Official setup references

- [GitHub Pages publishing settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages custom domains and DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

Setup instructions checked on October 21, 2026.
