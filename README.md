# Submission details

Hello! Thank you for considering my application. I hope you like it. Please feel free to look around and ask me about anything you like.
To run this project you'll need `yarn`, I'm using version `v1.22.21`. please open your terminal, navigate to the directory and run a 'yarn' to install the dependencies'
Now you can build the project using `yarn build` and finally, you can serve it using `yarn preview` or `yarn dev`.
Please note: during the build step, there will be a warning stating that some chunks are larger than 500kB after minification. I suspect this warning is from AG Grid; I used the community package version (the _free kitchen sink version_), this could have been ironed out but I didn't have the time.

## Tools used

I tried to keep my use of external tools minimal so I can show you how I code. If I was building this for production/a client, I'd probably lean on more external sources, for example TailwindCSS for styling or a fully-fledged component library for those multi-select-dropdowns.

In the end I leant on two libraries: AG Grid & React Select:

### AG Grid

Since I used to work there, AG Grid was the obvious choice for the data-grid, it has great documentation, is responsive and has a very useful filter API.
I only used the free/community version since it basically had all the features needed for this task.

### React Select

Those dropdowns caused me a lot of trouble. At first I tried coding my own version. And after wasting an entire day I realised why people would rather use a badly-documented library with obtuse tooling over building their own multi-select-checkbox-dropdowns.
However, in the end I managed to make it work (sort-of).

## About the project

Overall, I'm happy with the result. I started on Monday and I'm handing it in around midday on Wednesday. I'm sure I could have done a lot better but the base functionality is there and I don't think there's any big glaring issues that can't be fixed iteratively.

# The row data

```
    {
      "id": 11,
      "fundName": "FactorFX UCITS ETF",
      "primaryTicket": "FTFX",
      "incomeTreatment": "Acc",
      "shareClassCurrency": "USD",
      "ISIN": "IE00BD5HBS12",
      "strategy": "Fixed Income",
      "assetClass": { "category": "Fixed Income", "subCategory": "Currency" },
      "region": "Global",
      "style": "Index"
    },
```

For the data I just used what I had from the design and intuited what I could from the dropdowns. You can find the data in `src/data.json` as `rowData`. I kept it as straightforward as possible. I added an `id` because everything needs ids and I nested assetClass with a `category` and `subCategory` values for filtering.
I would like to have done something similar for `region` but I couldn't figure out how to show nested values in the dropdowns so I avoided it.

# The Dropdown options

I used a variety of different methods on purpose. All come from the `data.json` file and one is actually derived from the `rowData` dynamically. I wouldn't do this in production; I just wanted to show some variance.

# Things I missed

I think it's good to point out what you haven't done so here's a list:

- Styling the grid headers: although this is possible, I didn't get around to it in time.
- Dropdown styling: this would require a lot of digging and playing around. I made the chevron red and made the selected values look neat, so I stopped there.
- Nested dropdown values: You'll notice the "Market & Region" dropdown doesn't look quite right...
- Neater CSS: Functionality took precedence for me so this isn't as _ship-shape & Bristol-fashion_ as I'd like.
- More refactoring: You can always do more. I managed to completely get rid of all `useEffect` hooks, which I'm proud of but I didn't have enough time to make an elegant way to handle all filter-setting in one function (you can find a not on line 87 of `src/components/ProductFinder/ProductFinder.tsx`).
- Tests: ...

Thank you,
Bamdad Fard
