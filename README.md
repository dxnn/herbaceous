# herbaceous
### Tree pattern matching for small tree-like patterns

Herbs are like little trees that add flavour and panache to otherwise bland food. Herbaceous is a library for pattern matching on trees, using a smaller, more flavourful tree as the pattern.

If you're doing tree matching in production use something like Dave Herman's [pattern-match](https://github.com/dherman/pattern-match) instead, as this lib has all kinds of loose ends and kitty corners like "what if I want to match asterisks as leaf values in my tree?", in which case you are hosed and should have use Dave Herman's [pattern-match](https://github.com/dherman/pattern-match).

If you're interested in the theory behind this take a look at (OMeta)[http://tinlizzie.org/ometa/] or (Strucjure)[http://scattered-thoughts.net/blog/2012/12/04/strucjure-motivation/] or even (bondi)[https://bondi.it.uts.edu.au/], an implementation of the 'pattern calculus'. I don't know what a pattern calculus is, but it sure sounds fun!

Now that the disclaimers are out of the way, here's how it works:

```
HB.test({animal: 'unicorn'}, {asdf: 'blargh'})
```

That test returns false, like you would probably expect.

```
HB.test({animal: '*'}, {animal: 'drummer'})
```

That test returns true, which you may not have expected.

See the 'tests.js' file for more surprising stories of pattern matching fun.
