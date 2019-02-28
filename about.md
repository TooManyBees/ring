---
title: About
permalink: /about
---

{{site.title}} is built as a Jekyll static site, from the GitHub repo [{{site.repository}}]({{site.repository}}).

# To join

Visit the [create new file form]({{site.new_site_url}}) on this webring's repository.

Name your new file uniquely, and give it an extension of `.html`. Add some [Jekyll front matter](https://jekyllrb.com/docs/front-matter/) along the lines of the following:

```
---
uri: https://www.toomanybees.com
title: Too Many Bees!
desc: Jess's personal site
date: 2016-06-21
---
```

where `date` is the day you're making the new file request. Be careful not to mistake `uri` for `url`.

# To use on your site

Each member site gets an embed page generated for them. After your pull request is approved and merged, add the embed to your site with the markup:

```
<iframe src="{{'/sites/toomanybees' | absolute_url}}">
</iframe>
<script src="{{'/assets/parent.js' | absolute_url }}"></script>
```

replacing `toomanybees` with the name of the file you added. The `parent.js` script is unnecessary if you plan to size the iframe appropriately. It'll look like this:

<style type="text/css">
  iframe {
    border: none;
  }
</style>
<iframe src="{{'/sites/toomanybees' | absolute_url}}">
</iframe>
<script src="{{'/assets/parent.js' | absolute_url}}"></script>

# Custom CSS

If lavender isn't your thing, use your own css by appending the `stylesheet` query string param to the iframe's src attribute.

```
<iframe src="{{'/sites/toomanybees' | absolute_url}}?stylesheet={{'/assets/alternate-embed.css' | absolute_url}}">
</iframe>
<script src="{{'/assets/parent.js' | absolute_url}}"></script>
```

<iframe src="{{'/sites/toomanybees' | absolute_url}}?stylesheet={{'/assets/alternate-embed.css' | absolute_url}}">
</iframe>
<script src="{{'/assets/parent.js' | absolute_url}}"></script>

# Manual Implementations

The list of all member sites is available in JSON at the page [sites.json]({{"/sites.json" | absolute_url}}), for sites that would rather construct their embeds themselves.
