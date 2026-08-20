# TODO / NEEDSWORK / FIXME / XXX markers in git-src

410 lines in total, at HEAD `dea0ea35` (v2.55.0-590-gdea0ea3582). Collected on 2026-08-20.

Dates come from `git blame -w` and refer to the last time the line was touched, which is not necessarily when the marker was added.

Links point at the tip of `master` on GitHub, so line numbers may drift as that branch moves ahead of the commit scanned here.

This file is generated. Run `deno task report` to rebuild it; do not edit it by hand.

## Count by marker

| Marker | Count |
| --- | --- |
| TODO | 208 |
| NEEDSWORK | 122 |
| FIXME | 40 |
| XXX | 41 |

## Count by top-level directory

| Directory | Count |
| --- | --- |
| (root) | 156 |
| builtin | 56 |
| compat | 8 |
| contrib | 11 |
| Documentation | 16 |
| git-gui | 7 |
| gitk-git | 4 |
| gitweb | 3 |
| odb | 1 |
| perl | 9 |
| po | 22 |
| refs | 5 |
| t | 104 |
| templates | 4 |
| tools | 3 |
| trace2 | 1 |

## Count by year of last modification

| Year | Count |
| --- | --- |
| 2005 | 4 |
| 2006 | 16 |
| 2007 | 7 |
| 2008 | 11 |
| 2009 | 6 |
| 2010 | 20 |
| 2011 | 5 |
| 2012 | 37 |
| 2013 | 24 |
| 2014 | 10 |
| 2015 | 10 |
| 2016 | 12 |
| 2017 | 10 |
| 2018 | 20 |
| 2019 | 20 |
| 2020 | 14 |
| 2021 | 45 |
| 2022 | 49 |
| 2023 | 17 |
| 2024 | 20 |
| 2025 | 19 |
| 2026 | 34 |

## Full listing

<details>
<summary><b>(root)</b> &mdash; 156 markers</summary>

`.clang-format` (1)

- 2025-07-02 `9e45fc6c` [L21](https://github.com/git/git/blob/master/.clang-format#L21)

  ```
  # While we do want to enforce a character limit of 80 characters, we often
  # allow lines to overflow that limit to prioritize readability. Setting a
  # character limit here with penalties has been finicky and creates too many
  # false positives.
  #
  # NEEDSWORK: It would be nice if we can find optimal settings to ensure we
  # can re-enable the limit here.
  ```


`Makefile` (2)

- 2022-05-26 `b9832f7e` [L3205](https://github.com/git/git/blob/master/Makefile#L3205) `### TODO FIXME: Translating everything in these files is a bad`
- 2025-04-23 `04a13ed8` [L3480](https://github.com/git/git/blob/master/Makefile#L3480) `# TODO: deprecate 'hdr-check' in lieu of 'check-headers' in Git 2.51+`

`apply.c` (3)

- 2016-04-22 `13b5af22` [L864](https://github.com/git/git/blob/master/apply.c#L864)

  ```
  /*
   * Get the name etc info from the ---/+++ lines of a traditional patch header
   *
   * FIXME! The end-of-filename heuristics are kind of screwy. For existing
   * files, we can happily check the index for a match, but for creating a
   * new file we should try to match whatever "patch" does. I have no idea.
   */
  ```

- 2016-04-22 `13b5af22` [L3406](https://github.com/git/git/blob/master/apply.c#L3406) `/* XXX read_sha1_file NUL-terminates */`
- 2016-04-22 `13b5af22` [L3609](https://github.com/git/git/blob/master/apply.c#L3609)

  ```
  /*
   * There is no way to apply subproject
   * patch without looking at the index.
   * NEEDSWORK: shouldn't this be flagged
   * as an error???
   */
  ```


`branch.c` (1)

- 2022-01-28 `961b130d` [L837](https://github.com/git/git/blob/master/branch.c#L837)

  ```
  /*
   * NEEDSWORK If tracking was set up in the superproject but not the
   * submodule, users might expect "git branch --recurse-submodules" to
   * fail or give a warning, but this is not yet implemented because it is
   * tedious to determine whether or not tracking was set up in the
   * superproject.
   */
  ```


`bundle-uri.c` (1)

- 2025-05-14 `35cb1bb0` [L327](https://github.com/git/git/blob/master/bundle-uri.c#L327)

  ```
  /*
   * The protocol we speak with git-remote-https(1) uses a space to
   * separate between URI and file, so the URI itself must not contain a
   * space. If it did, an adversary could change the location where the
   * downloaded file is being written to.
   *
   * Similarly, we use newlines to separate commands from one another.
   * Consequently, neither the URI nor the file must contain a newline or
   * otherwise an adversary could inject arbitrary commands.
   *
   * TODO: Restricting newlines in the target paths may break valid
   *       usecases, even if those are a bit more on the esoteric side.
   *       If this ever becomes a problem we should probably think about
   *       alternatives. One alternative could be to use NUL-delimited
   *       requests in git-remote-http(1). Another alternative could be
   *       to use URL quoting.
   */
  ```


`bundle.c` (1)

- 2023-01-31 `d9fd674c` [L260](https://github.com/git/git/blob/master/bundle.c#L260) `/* TODO: preserve this verbose language. */`

`color.c` (1)

- 2017-08-21 `6cdf8a79` [L421](https://github.com/git/git/blob/master/color.c#L421)

  ```
  /*
   * NEEDSWORK: This function is sometimes used from multiple threads, and
   * we end up using want_auto racily. That "should not matter" since
   * we always write the same value, but it's still wrong. This function
   * is listed in .tsan-suppressions for the time being.
   */
  ```


`combine-diff.c` (1)

- 2014-02-24 `7195fbfa` [L1536](https://github.com/git/git/blob/master/combine-diff.c#L1536)

  ```
  /* find set of paths that everybody touches
   *
   * NOTE
   *
   * Diffcore transformations are bound to diff_filespec and logic
   * comparing two entries - i.e. they do not apply directly to combine
   * diff.
   *
   * If some of such transformations is requested - we launch generic
   * path scanning, which works significantly slower compared to
   * simultaneous all-trees-in-one-go scan in find_paths_multitree().
   *
   * TODO some of the filters could be ported to work on
   * combine_diff_paths - i.e. all functionality that skips paths, so in
   * theory, we could end up having only multitree path scanning.
   *
   * NOTE please keep this semantically in sync with diffcore_std()
   */
  ```


`connect.c` (1)

- 2018-03-15 `1aa8dded` [L1454](https://github.com/git/git/blob/master/connect.c#L1454)

  ```
  /*
   * NEEDSWORK: If we are trying to use protocol v2 and we are planning
   * to perform any operation that doesn't involve upload-pack (i.e., a
   * fetch, ls-remote, etc), then fallback to v0 since we don't know how
   * to do anything else (like push or remote archive) via v2.
   */
  ```


`diff-lib.c` (1)

- 2024-04-03 `86829f3f` [L139](https://github.com/git/git/blob/master/diff-lib.c#L139)

  ```
  /*
   * NEEDSWORK:
   * Here we filter with pathspec but the result is further
   * filtered out when --relative is in effect.  To end-users,
   * a pathspec element that matched only to paths outside the
   * current directory is like not matching anything at all;
   * the handling of ps_matched[] here may become problematic
   * if/when we add the "--error-unmatch" option to "git diff".
   */
  ```


`diff.c` (8)

- 2017-06-29 `e6e045f8` [L869](https://github.com/git/git/blob/master/diff.c#L869)

  ```
  /*
   * This struct is used when we need to buffer the output of the diff output.
   *
   * NEEDSWORK: Instead of storing a copy of the line, add an offset pointer
   * into the pre/post image file. This pointer could be a union with the
   * line pointer. By storing an offset into the file instead of the literal line,
   * we can decrease the memory footprint for the buffered output. At first we
   * may want to only have indirection for the content lines, but we could also
   * enhance the state for emitting prefabricated lines, e.g. the similarity
   * score line or hunk/file headers would only need to store a number or path
   * and then the output can be constructed later on depending on state.
   */
  ```

- 2017-08-15 `f0b8fb6e` [L1188](https://github.com/git/git/blob/master/diff.c#L1188)

  ```
  /*
   * If o->color_moved is COLOR_MOVED_PLAIN, this function does nothing.
   *
   * Otherwise, if the last block has fewer alphanumeric characters than
   * COLOR_MOVED_MIN_ALNUM_COUNT, unset DIFF_SYMBOL_MOVED_LINE on all lines in
   * that block.
   *
   * The last block consists of the (n - block_length)'th line up to but not
   * including the nth line.
   *
   * Returns 0 if the last block is empty or is unset by this function, non zero
   * otherwise.
   *
   * NEEDSWORK: This uses the same heuristic as blame_entry_score() in blame.c.
   * Think of a way to unify them.
   */
  ```

- 2017-06-29 `e6e045f8` [L2295](https://github.com/git/git/blob/master/diff.c#L2295)

  ```
  /*
   * NEEDSWORK:
   * Instead of appending each, concat all words to a line?
   */
  ```

- 2012-04-30 `dc801e71` [L2995](https://github.com/git/git/blob/master/diff.c#L2995) `/* "Bin XXX -> YYY bytes" */`
- 2012-04-30 `dc801e71` [L3031](https://github.com/git/git/blob/master/diff.c#L3031) `* Binary files are displayed with "Bin XXX -> YYY bytes"`
- 2012-04-30 `dc801e71` [L3060](https://github.com/git/git/blob/master/diff.c#L3060)

  ```
  /*
   * First assign sizes that are wanted, ignoring available width.
   * strlen("Bin XXX -> YYY bytes") == bin_width, and the part
   * starting from "XXX" should fit in graph_width.
   */
  ```

- 2012-04-30 `dc801e71` [L3061](https://github.com/git/git/blob/master/diff.c#L3061)

  ```
  /*
   * First assign sizes that are wanted, ignoring available width.
   * strlen("Bin XXX -> YYY bytes") == bin_width, and the part
   * starting from "XXX" should fit in graph_width.
   */
  ```

- 2019-04-05 `7fbbcb21` [L7447](https://github.com/git/git/blob/master/diff.c#L7447)

  ```
  /*
   * NEEDSWORK: Consider deduplicating the OIDs sent.
   */
  ```


`diffcore-rename.c` (1)

- 2021-06-22 `1aedd03a` [L849](https://github.com/git/git/blob/master/diffcore-rename.c#L849)

  ```
  /*
   * TODO: The following loops mirror the code/logic from
   * find_basename_matches(), though not quite exactly.  Maybe
   * abstract the iteration logic out somehow?
   */
  ```


`dir.c` (3)

- 2015-03-24 `777c55a6` [L652](https://github.com/git/git/blob/master/dir.c#L652)

  ```
  /*
   * The caller might have fed identical pathspec
   * twice.  Do not barf on such a mistake.
   * FIXME: parse_pathspec should have eliminated
   * duplicate pathspec.
   */
  ```

- 2015-03-08 `5ebf79ad` [L1778](https://github.com/git/git/blob/master/dir.c#L1778)

  ```
  /*
   * NEEDSWORK: when untracked cache is enabled, prep_exclude()
   * will first be called in valid_cached_dir() then maybe many
   * times more in last_matching_pattern(). When the cache is
   * used, last_matching_pattern() will not be called and
   * reading .gitignore content will be a waste.
   *
   * So when it's called by valid_cached_dir() and we can get
   * .gitignore SHA-1 from the index (i.e. .gitignore is not
   * modified on work tree), we could delay reading the
   * .gitignore content until we absolutely need it in
   * last_matching_pattern(). Be careful about ignore rule
   * order, though, if you do that.
   */
  ```

- 2021-04-01 `d425f651` [L4080](https://github.com/git/git/blob/master/dir.c#L4080) `/* TODO: audit for interaction with sparse-index. */`

`entry.c` (1)

- 2021-04-01 `3450a304` [L454](https://github.com/git/git/blob/master/entry.c#L454) `/* TODO: audit for interaction with sparse-index. */`

`environment.h` (2)

- 2026-07-14 `1a6c84e9` [L92](https://github.com/git/git/blob/master/environment.h#L92)

  ```
  /*
   * NEEDSWORK: It would be better if these definitions could be moved to
   * other more specific files, but care is needed to avoid circular
   * inclusion issues.
   */
  ```

- 2024-09-12 `673af418` [L212](https://github.com/git/git/blob/master/environment.h#L212)

  ```
  /*
   * TODO: All the below state either explicitly or implicitly relies on
   * `the_repository`. We should eventually get rid of these and make the
   * dependency on a repository explicit:
   *
   *   - `have_git_dir()` should not have to exist at all. Instead, we should
   *     decide on whether or not we have a `struct repository`.
   *
   *   - All the global config variables should become tied to a repository. Like
   *     this, we'd correctly honor repository-local configuration and be able to
   *     distinguish configuration values from different repositories.
   *
   * Please do not add new global config variables here.
   */
  ```


`fsmonitor.c` (2)

- 2024-02-26 `29c139ce` [L246](https://github.com/git/git/blob/master/fsmonitor.c#L246)

  ```
  /*
   * NEEDSWORK: We used the name-hash to find the correct
   * case-spelling of the pathname in the cache-entry[], so
   * technically this is a tracked file or a sparse-directory.
   * It should not have any entries in the untracked-cache, so
   * we should not need to use the case-corrected spelling to
   * invalidate the untracked-cache.  So we may not need to
   * do this.  For now, I'm going to be conservative and always
   * do it; we can revisit this later.
   */
  ```

- 2024-02-26 `29c139ce` [L285](https://github.com/git/git/blob/master/fsmonitor.c#L285)

  ```
  /*
   * NEEDSWORK: Our caller already tried an exact match
   * and failed to find one.  They called us to do an
   * ICASE match, so we should never get an exact match,
   * so we could promote this to a BUG() here if we
   * wanted to.  It doesn't hurt anything to just return
   * 0 and go on because we should never get here.  Or we
   * could just get rid of the memcmp() and this "if"
   * clause completely.
   */
  ```


`git-archimport.perl` (4)

- 2005-09-11 `241b5967` [L23](https://github.com/git/git/blob/master/git-archimport.perl#L23) `=head1 TODO`
- 2005-11-23 `42f44b08` [L229](https://github.com/git/git/blob/master/git-archimport.perl#L229)

  ```
  # FIXME see if we can find a more optimal way to do this by graphing
  # the ancestry data and walking it, that way we won't have to rely on
  # client-supplied dates
  ```

- 2005-08-30 `d3968363` [L237](https://github.com/git/git/blob/master/git-archimport.perl#L237) `## TODO cleanup irrelevant patches`
- 2005-11-23 `6df896b5` [L474](https://github.com/git/git/blob/master/git-archimport.perl#L474) `# TODO: handle removed_directories and renamed_directories:`

`git-cvsexportcommit.perl` (1)

- 2006-01-06 `576cfc86` [L299](https://github.com/git/git/blob/master/git-cvsexportcommit.perl#L299) `# TODO:we need to handle removed in cvs`

`git-cvsimport.perl` (1)

- 2006-01-15 `8cd16211` [L85](https://github.com/git/git/blob/master/git-cvsimport.perl#L85) `# NEEDSWORK: Maybe warn on unrecognized lines?`

`git-cvsserver.perl` (27)

- 2006-02-22 `3fda8c4c` [L424](https://github.com/git/git/blob/master/git-cvsserver.perl#L424) `# TODO : re-enable this, currently it's not particularly useful`
- 2006-02-22 `3fda8c4c` [L663](https://github.com/git/git/blob/master/git-cvsserver.perl#L663) `# TODO : check we're not squashing an already existing file`
- 2008-05-14 `8a06a632` [L694](https://github.com/git/git/blob/master/git-cvsserver.perl#L694) `#TODO: Also have option to send warning to user?`
- 2006-02-22 `3fda8c4c` [L767](https://github.com/git/git/blob/master/git-cvsserver.perl#L767) `# TODO : not sure if the format of this message is quite correct.`
- 2012-10-13 `61717661` [L1118](https://github.com/git/git/blob/master/git-cvsserver.perl#L1118) `# || ( defined($state->{opt}{D}) && $state->{opt}{D} ne "" ) # TODO`
- 2012-10-13 `61717661` [L1122](https://github.com/git/git/blob/master/git-cvsserver.perl#L1122)

  ```
  # TODO: Convert -D value into the form 2011.04.10.04.46.57,
  #   similar to an entry line's sticky date, without the D prefix.
  #   It sometimes (always?) arrives as something more like
  #   '10 Apr 2011 04:46:57 -0000'...
  # $stickyInfo={ 'date' => (defined($stickyDate)?$stickyDate:undef) };
  ```

- 2012-10-13 `d8574ff2` [L1312](https://github.com/git/git/blob/master/git-cvsserver.perl#L1312)

  ```
  # TODO: If it has been modified in the sandbox, error out
  #   with the appropriate message, rather than deleting a modified
  #   file.
  ```

- 2006-02-22 `3fda8c4c` [L1469](https://github.com/git/git/blob/master/git-cvsserver.perl#L1469)

  ```
  # transmit file, format is single integer on a line by itself (file
  # size) followed by the file contents
  # TODO : we should copy files in blocks
  ```

- 2012-10-13 `61717661` [L1497](https://github.com/git/git/blob/master/git-cvsserver.perl#L1497) `# TODO?: OR sticky dir is different...`
- 2012-10-13 `61717661` [L1511](https://github.com/git/git/blob/master/git-cvsserver.perl#L1511)

  ```
  # TODO?: Consider sending a final duplicate Sticky response
  #   to more closely mimic real CVS.
  ```

- 2012-10-13 `61717661` [L1610](https://github.com/git/git/blob/master/git-cvsserver.perl#L1610) `#TODO: We could split the cvs commit into multiple`
- 2006-02-22 `3fda8c4c` [L1847](https://github.com/git/git/blob/master/git-cvsserver.perl#L1847) `# TODO : All possible statuses aren't yet implemented`
- 2012-10-13 `61717661` [L2152](https://github.com/git/git/blob/master/git-cvsserver.perl#L2152)

  ```
  # TODO: Use --label instead of -L because -L is no longer
  #  documented and may go away someday.  Not sure if there are
  #  versions that only support -L, which would make this change risky?
  #  http://osdir.com/ml/bug-gnu-utils-gnu/2010-12/msg00060.html
  #    ("man diff" should actually document the best migration strategy,
  #  [current behavior, future changes, old compatibility issues
  #  or lack thereof, etc], not just stop mentioning the option...)
  # TODO: Real CVS seems to include a date in the label, before
  #  the revision part, without the keyword "revision".  The following
  #  has minimal changes compared to original versions of
  #  git-cvsserver.perl.  (Mostly tab vs space after filename.)
  ```

- 2012-10-13 `61717661` [L2159](https://github.com/git/git/blob/master/git-cvsserver.perl#L2159)

  ```
  # TODO: Use --label instead of -L because -L is no longer
  #  documented and may go away someday.  Not sure if there are
  #  versions that only support -L, which would make this change risky?
  #  http://osdir.com/ml/bug-gnu-utils-gnu/2010-12/msg00060.html
  #    ("man diff" should actually document the best migration strategy,
  #  [current behavior, future changes, old compatibility issues
  #  or lack thereof, etc], not just stop mentioning the option...)
  # TODO: Real CVS seems to include a date in the label, before
  #  the revision part, without the keyword "revision".  The following
  #  has minimal changes compared to original versions of
  #  git-cvsserver.perl.  (Mostly tab vs space after filename.)
  ```

- 2006-02-22 `3fda8c4c` [L2329](https://github.com/git/git/blob/master/git-cvsserver.perl#L2329)

  ```
  # populate the temporary index based on the latest commit were we saw
  # the file -- but do it cheaply without checking out any files
  # TODO: if we got a revision from the client, use that instead
  # to look up the commithash in sqlite (still good to default to
  # the current head as we do now)
  ```

- 2012-10-13 `eb5dcb2c` [L2760](https://github.com/git/git/blob/master/git-cvsserver.perl#L2760) `# || ( defined($stickyDate) && $stickyDate ne "" )   # TODO`
- 2012-10-13 `eb5dcb2c` [L2764](https://github.com/git/git/blob/master/git-cvsserver.perl#L2764)

  ```
  # TODO: Convert -D value into the form 2011.04.10.04.46.57,
  #   similar to an entry line's sticky date, without the D prefix.
  #   It sometimes (always?) arrives as something more like
  #   '10 Apr 2011 04:46:57 -0000'...
  # $result={ 'date' => (defined($stickyDate)?$stickyDate:undef) };
  ```

- 2012-10-13 `eb5dcb2c` [L2808](https://github.com/git/git/blob/master/git-cvsserver.perl#L2808)

  ```
  # TODO: When/if we actually pick versions by {date} properly,
  #   also handle it here:
  #   "D$stickyInfo->{date}" (example: "D2011.04.13.20.37.07").
  ```

- 2006-02-22 `3fda8c4c` [L3861](https://github.com/git/git/blob/master/git-cvsserver.perl#L3861)

  ```
  # TODO: log processing is memory bound
  # if we can parse into a 2nd file that is in reverse order
  # we can probably do something really efficient
  ```

- 2012-10-13 `ab07681f` [L4513](https://github.com/git/git/blob/master/git-cvsserver.perl#L4513)

  ```
  # Filters:
  # TODO: date, state, or by specific logins filters?
  # TODO: Handle comma-separated list of revFilter items, each item
  #   can be a range [only case currently handled] or individual
  #   rev or branch or "branch.".
  # TODO: Adjust $db_query WHERE clause based on revFilter, instead of
  #   manually filtering the results of the query?
  ```

- 2012-10-13 `ab07681f` [L4514](https://github.com/git/git/blob/master/git-cvsserver.perl#L4514)

  ```
  # Filters:
  # TODO: date, state, or by specific logins filters?
  # TODO: Handle comma-separated list of revFilter items, each item
  #   can be a range [only case currently handled] or individual
  #   rev or branch or "branch.".
  # TODO: Adjust $db_query WHERE clause based on revFilter, instead of
  #   manually filtering the results of the query?
  ```

- 2012-10-13 `ab07681f` [L4517](https://github.com/git/git/blob/master/git-cvsserver.perl#L4517)

  ```
  # Filters:
  # TODO: date, state, or by specific logins filters?
  # TODO: Handle comma-separated list of revFilter items, each item
  #   can be a range [only case currently handled] or individual
  #   rev or branch or "branch.".
  # TODO: Adjust $db_query WHERE clause based on revFilter, instead of
  #   manually filtering the results of the query?
  ```

- 2012-10-13 `bfdafa09` [L4561](https://github.com/git/git/blob/master/git-cvsserver.perl#L4561) `actual revision (one of the below).  TODO: Also allow it to`
- 2012-10-13 `bfdafa09` [L4635](https://github.com/git/git/blob/master/git-cvsserver.perl#L4635)

  ```
  #     this version of this file originated.  Each b is
  #     the numerical value of the corresponding byte plus
  #     100.
  #      - "plus 100" avoids "0"s, and also reduces the
  #        likelihood of a collision in the case that someone someday
  #        writes an import tool that tries to preserve original
  #        CVS revision numbers, and the original CVS data had done
  #        lots of branches off of branches and other strangeness to
  #        end up with a real version number that just happens to look
  #        like this special revision number form.  Also, if needed
  #        there are several ways to extend/identify alternative encodings
  #        within the "2.1.1.2000" part if necessary.
  #      - Unlike real CVS revisions, you can't really reconstruct what
  #        relation a revision of this form has to other revisions.
  #   - FUTURE: TODO: Rework database somehow to make up and remember
  #     fully-CVS-compatible branches and branch version numbers.
  ```

- 2012-10-13 `658b57ad` [L4738](https://github.com/git/git/blob/master/git-cvsserver.perl#L4738)

  ```
  # NOTE: This function doesn't scale well (lots of forks), especially
  #   if you have many files that have not been modified for many commits
  #   (each git-rev-parse redoes a lot of work for each file
  #   that theoretically could be done in parallel by smarter
  #   graph traversal).
  #
  # TODO: Possible optimization strategies:
  #   - Solve the issue of assigning and remembering "real" CVS
  #     revision numbers for branches, and ensure the
  #     data structure can do this efficiently.  Perhaps something
  #     similar to "git notes", and carefully structured to take
  #     advantage same-sha1-is-same-contents, to roll the same
  #     unmodified subdirectory data onto multiple commits?
  #   - Write and use a C tool that is like git-blame, but
  #     operates on multiple files with file granularity, instead
  #     of one file with line granularity.  Cache
  #     most-recently-modified in $self->{commitRefCache}{$revCommit}.
  #     Try to be intelligent about how many files we do with
  #     one fork (perhaps one directory at a time, without recursion,
  #     and/or include directory as one line item, recurse from here
  #     instead of in C tool?).
  ```

- 2012-10-13 `658b57ad` [L4765](https://github.com/git/git/blob/master/git-cvsserver.perl#L4765)

  ```
      # Does the file exist in $revCommit?
  # TODO: Include file hash in dirmap cache.
  ```

- 2012-10-13 `51a7e6db` [L5015](https://github.com/git/git/blob/master/git-cvsserver.perl#L5015)

  ```
  # allowed tag names
  # TODO: Perhaps use git check-ref-format, with an in-process cache of
  #  validated names?
  ```


`git-filter-branch.sh` (2)

- 2007-07-23 `dfd05e38` [L542](https://github.com/git/git/blob/master/git-filter-branch.sh#L542)

  ```
  # TODO: This should possibly go, with the semantics that all positive given
  #       refs are updated, and their original heads stored in refs/original/
  # Filter tags
  ```

- 2007-06-03 `6f6826c5` [L550](https://github.com/git/git/blob/master/git-filter-branch.sh#L550) `# XXX: Rewrite tagged trees as well?`

`git-p4.py` (4)

- 2007-05-23 `6a49f8e2` [L4071](https://github.com/git/git/blob/master/git-p4.py#L4071)

  ```
  # TODO: should always look at previous commits,
  # merge with previous imports, if possible.
  ```

- 2022-04-01 `c785e202` [L4204](https://github.com/git/git/blob/master/git-p4.py#L4204) `# FIXME - what's a P4 projectName ?`
- 2022-04-01 `c785e202` [L4217](https://github.com/git/git/blob/master/git-p4.py#L4217) `# FIXME`
- 2022-04-01 `c785e202` [L4324](https://github.com/git/git/blob/master/git-p4.py#L4324) `# TODO: use common prefix of args?`

`git-svn.perl` (3)

- 2014-12-07 `83c9433e` [L1417](https://github.com/git/git/blob/master/git-svn.perl#L1417) `# TODO: handle combining properties better`
- 2014-12-07 `83c9433e` [L1437](https://github.com/git/git/blob/master/git-svn.perl#L1437) `# TODO: don't simply append here if $file already has svn-properties`
- 2007-01-13 `44320b9e` [L1870](https://github.com/git/git/blob/master/git-svn.perl#L1870)

  ```
  # skip this for now, we regenerate the
  # correct one on re-fetch anyways
  # TODO: set *:merge properties or like...
  ```


`git.c` (1)

- 2016-01-26 `441981bc` [L860](https://github.com/git/git/blob/master/git.c#L860)

  ```
  /*
   * If we tried alias and futzed with our environment,
   * it no longer is safe to invoke builtins directly in
   * general.  We have to spawn them as dashed externals.
   *
   * NEEDSWORK: if we can figure out cases
   * where it is safe to do, we can avoid spawning a new
   * process.
   */
  ```


`graph.c` (1)

- 2008-05-04 `c12172d2` [L47](https://github.com/git/git/blob/master/graph.c#L47)

  ```
  /*
   * TODO:
   * - Limit the number of columns, similar to the way gitk does.
   *   If we reach more than a specified number of columns, omit
   *   sections of some columns.
   */
  ```


`grep.c` (2)

- 2020-01-15 `1d1729ca` [L1535](https://github.com/git/git/blob/master/grep.c#L1535)

  ```
  /*
   * fill_textconv is not remotely thread-safe; it modifies the global
   * diff tempfile structure, writes to the_repo's odb and might
   * internally call thread-unsafe functions such as the
   * prepare_packed_git() lazy-initializator. Because of the last two, we
   * must ensure mutual exclusion between this call and the object reading
   * API, thus we use obj_read_lock() here.
   *
   * TODO: allowing text conversion to run in parallel with object
   * reading operations might increase performance in the multithreaded
   * non-worktreee git-grep with --textconv.
   */
  ```

- 2006-09-17 `83b5d2f5` [L1786](https://github.com/git/git/blob/master/grep.c#L1786)

  ```
  /* NEEDSWORK:
   * The real "grep -c foo *.c" gives many "bar.c:0" lines,
   * which feels mostly useless but sometimes useful.  Maybe
   * make it another option?  For now suppress them.
   */
  ```


`grep.h` (1)

- 2021-08-16 `0693806b` [L128](https://github.com/git/git/blob/master/grep.h#L128)

  ```
  /*
   * NEEDSWORK: See if we can remove this field, because the repository
   * should probably be per-source. That is, grep.c functions using this
   * field should probably start using "repo" in "struct grep_source"
   * instead.
   *
   * This is potentially the cause of at least one bug - "git grep"
   * using the textconv attributes from the superproject on the
   * submodules. See the failing "git grep --textconv" tests in
   * t7814-grep-recurse-submodules.sh for more information.
   */
  ```


`hash.h` (1)

- 2026-02-07 `67e526c3` [L231](https://github.com/git/git/blob/master/hash.h#L231) `uint32_t algo;	/* XXX requires 4-byte alignment */`

`help.c` (1)

- 2020-04-16 `617d5719` [L797](https://github.com/git/git/blob/master/help.c#L797) `/* NEEDSWORK: also save and output GIT-BUILD_OPTIONS? */`

`http-push.c` (1)

- 2009-01-17 `20642801` [L1125](https://github.com/git/git/blob/master/http-push.c#L1125)

  ```
  /*
   * NEEDSWORK: remote_ls() ignores info/refs on the remote side.  But it
   * should _only_ heed the information from that file, instead of trying to
   * determine the refs from the remote file system (badly: it does not even
   * know about packed-refs).
   */
  ```


`imap-send.c` (1)

- 2013-01-15 `1efee7ff` [L770](https://github.com/git/git/blob/master/imap-send.c#L770)

  ```
  ; /*
     * Unhandled response-data with at least two words.
     * Ignore it.
     *
     * NEEDSWORK: Previously this case handled '<num> EXISTS'
     * and '<num> RECENT' but as a probably-unintended side
     * effect it ignores other unrecognized two-word
     * responses.  imap-send doesn't ever try to read
     * messages or mailboxes these days, so consider
     * eliminating this case.
     */
  ```


`khash.h` (1)

- 2013-12-21 `fff42755` [L184](https://github.com/git/git/blob/master/khash.h#L184) `} /* TODO: to implement automatically shrinking; resize() already supp`

`line-log.c` (4)

- 2013-03-28 `12da1d1f` [L933](https://github.com/git/git/blob/master/line-log.c#L933) `/* NEEDSWORK should apply some heuristics to prevent mismatches */`
- 2013-04-12 `1ddac3ff` [L977](https://github.com/git/git/blob/master/line-log.c#L977)

  ```
  /*
   * Store away the diff for later output.  We
   * tuck it in the ranges we got as _input_,
   * since that's the commit that caused the
   * diff.
   *
   * NEEDSWORK not enough when we get around to
   * doing something interesting with merges;
   * currently each invocation on a merge parent
   * trashes the previous one's diff.
   *
   * NEEDSWORK tramples over data structures not owned here
   */
  ```

- 2013-04-12 `1ddac3ff` [L982](https://github.com/git/git/blob/master/line-log.c#L982)

  ```
  /*
   * Store away the diff for later output.  We
   * tuck it in the ranges we got as _input_,
   * since that's the commit that caused the
   * diff.
   *
   * NEEDSWORK not enough when we get around to
   * doing something interesting with merges;
   * currently each invocation on a merge parent
   * trashes the previous one's diff.
   *
   * NEEDSWORK tramples over data structures not owned here
   */
  ```

- 2013-03-28 `12da1d1f` [L1134](https://github.com/git/git/blob/master/line-log.c#L1134) `/* NEEDSWORK evil merge detection stuff */`

`list-objects-filter-options.c` (1)

- 2019-09-18 `627b8268` [L395](https://github.com/git/git/blob/master/list-objects-filter-options.c#L395) `/* NEEDSWORK: 'expand' result leaking??? */`

`list-objects.c` (1)

- 2017-11-15 `ce5b6f9b` [L416](https://github.com/git/git/blob/master/list-objects.c#L416)

  ```
  /*
   * NEEDSWORK: Adding the tree and then flushing it here
   * needs a reallocation for each commit. Can we pass the
   * tree directory without allocation churn?
   */
  ```


`match-trees.c` (1)

- 2008-06-30 `85e51b78` [L273](https://github.com/git/git/blob/master/match-trees.c#L273)

  ```
  /*
   * NEEDSWORK: this limits the recursion depth to hardcoded
   * value '2' to avoid excessive overhead.
   */
  ```


`merge-ort.c` (6)

- 2021-01-01 `4204cd59` [L1797](https://github.com/git/git/blob/master/merge-ort.c#L1797) `/* FIXME: can't handle linked worktrees in submodules yet */`
- 2021-01-01 `62fdec17` [L2220](https://github.com/git/git/blob/master/merge-ort.c#L2220)

  ```
  /*
   * FIXME: If opt->priv->call_depth && !clean, then we really
   * should not make result->mode match either a->mode or
   * b->mode; that causes t6416 "check conflicting mode for
   * regular file" to fail.  It would be best to use some other
   * mode, but we'll confuse all kinds of stuff if we use one
   * where S_ISREG(result->mode) isn't true, and if we use
   * something like 0100666, then tree-walk.c's calls to
   * canon_mode() will just normalize that to 100644 for us and
   * thus not solve anything.
   *
   * Figure out if there's some kind of way we can work around
   * this...
   */
  ```

- 2020-12-15 `53e88a03` [L3058](https://github.com/git/git/blob/master/merge-ort.c#L3058)

  ```
  /*
   * TODO: For renames we normally remove the path at the
   * old name.  It would thus seem consistent to do the
   * same for rename/rename(1to2) cases, but we haven't
   * done so traditionally and a number of the regression
   * tests now encode an expectation that the file is
   * left there at stage 1.  If we ever decide to change
   * this, add the following two lines here:
   *    base->merged.is_null = 1;
   *    base->merged.clean = 1;
   * and remove the setting of base->path_conflict to 1.
   */
  ```

- 2020-12-13 `6681ce5c` [L4632](https://github.com/git/git/blob/master/merge-ort.c#L4632) `unpack_opts.quiet = 0; /* FIXME: sequencer might want quiet? */`
- 2021-09-27 `04988c8d` [L4635](https://github.com/git/git/blob/master/merge-ort.c#L4635) `unpack_opts.preserve_ignored = 0; /* FIXME: !opts->overwrite_ignore */`
- 2022-08-04 `4057523a` [L4782](https://github.com/git/git/blob/master/merge-ort.c#L4782)

  ```
  /*
   * NEEDSWORK: The steps to resolve these errors deserve a more
   * detailed explanation than what is currently printed below.
   */
  ```


`meson.build` (1)

- 2025-04-23 `04a13ed8` [L2279](https://github.com/git/git/blob/master/meson.build#L2279) `# TODO: deprecate 'hdr-check' in lieu of 'check-headers' in Git 2.51+`

`midx.c` (1)

- 2024-04-01 `748b88a0` [L1007](https://github.com/git/git/blob/master/midx.c#L1007) `display_progress(progress, 0); /* TODO: Measure QSORT() progress */`

`notes-merge.c` (1)

- 2010-11-09 `75ef3f4a` [L631](https://github.com/git/git/blob/master/notes-merge.c#L631) `/* TODO: How to handle multiple merge-bases? */`

`object-file.c` (1)

- 2026-07-10 `48d730a1` [L1326](https://github.com/git/git/blob/master/object-file.c#L1326)

  ```
  /*
   * ODB transactions for git-receive-pack(1) eagerly create a
   * temporary directory and use a different temporary directory
   * prefix.
   *
   * NEEDSWORK: This transaction flag is only used by the "files"
   * backend to special case temporary directory set up and
   * handling. Ideally transaction users should not have to care
   * though. To avoid this, we could eagerly create the temporary
   * directory and use the same prefix name for all transactions.
   */
  ```


`object.h` (1)

- 2018-05-15 `14ba97f8` [L14](https://github.com/git/git/blob/master/object.h#L14) `/* TODO: migrate alloc_states to mem-pool? */`

`odb.h` (1)

- 2025-07-01 `e989dd96` [L489](https://github.com/git/git/blob/master/odb.h#L489)

  ```
  /*
   * Enabling the object read lock allows multiple threads to safely call the
   * following functions in parallel: odb_read_object(),
   * odb_read_object_peeled(), odb_read_object_info() and odb().
   *
   * obj_read_lock() and obj_read_unlock() may also be used to protect other
   * section which cannot execute in parallel with object reading. Since the used
   * lock is a recursive mutex, these sections can even contain calls to object
   * reading functions. However, beware that in these cases zlib inflation won't
   * be performed in parallel, losing performance.
   *
   * TODO: odb_read_object_info_extended()'s call stack has a recursive behavior. If
   * any of its callees end up calling it, this recursive call won't benefit from
   * parallel inflation.
   */
  ```


`oidmap.h` (2)

- 2019-10-06 `87571c3f` [L101](https://github.com/git/git/blob/master/oidmap.h#L101) `/* TODO: this API could be reworked to do compile-time type checks */`
- 2019-10-06 `87571c3f` [L109](https://github.com/git/git/blob/master/oidmap.h#L109) `/* TODO: this API could be reworked to do compile-time type checks */`

`pack-bitmap.c` (1)

- 2022-08-14 `28cd7306` [L1046](https://github.com/git/git/blob/master/pack-bitmap.c#L1046) `/* NEEDSWORK: cache misses aren't recorded */`

`path.c` (1)

- 2015-10-01 `b2a7123b` [L1108](https://github.com/git/git/blob/master/path.c#L1108) `* NEEDSWORK: This function doesn't perform normalization w.r.t. traili`

`pathspec.c` (1)

- 2013-07-14 `bd30c2e4` [L537](https://github.com/git/git/blob/master/pathspec.c#L537)

  ```
  /*
   * FIXME: should we enable ONESTAR in _GLOB for
   * pattern "* * / * . c"?
   */
  ```


`pkt-line.c` (1)

- 2011-02-24 `bbc30f99` [L73](https://github.com/git/git/blob/master/pkt-line.c#L73) `/* XXX we should really handle printable utf8 */`

`promisor-remote.h` (1)

- 2019-06-25 `fa3d1b63` [L11](https://github.com/git/git/blob/master/promisor-remote.h#L11)

  ```
  /*
   * Promisor remote linked list
   *
   * Information in its fields come from remote.XXX config entries or
   * from extensions.partialclone, except for 'accepted' which comes
   * from protocol v2 capabilities exchange.
   */
  ```


`read-cache.c` (4)

- 2022-09-28 `4a6ed30f` [L1858](https://github.com/git/git/blob/master/read-cache.c#L1858)

  ```
  /*
   * NEEDSWORK: using 'offsetof()' is cumbersome and should be replaced
   * with something more akin to 'load_bitmap_entries_v1()'s use of
   * 'read_be16'/'read_be32'. For consistency with the corresponding
   * ondisk entry write function ('copy_cache_entry_to_ondisk()'), this
   * should be done at the same time as removing references to
   * 'ondisk_cache_entry' there.
   */
  ```

- 2018-10-10 `77ff1127` [L2274](https://github.com/git/git/blob/master/read-cache.c#L2274) `/* TODO: does creating more threads than cores help? */`
- 2021-04-01 `0c18c059` [L2546](https://github.com/git/git/blob/master/read-cache.c#L2546) `/* TODO: audit for interaction with sparse-index. */`
- 2023-05-16 `1a40e7be` [L3830](https://github.com/git/git/blob/master/read-cache.c#L3830) `/* TODO: audit for interaction with sparse-index. */`

`ref-filter.c` (2)

- 2024-09-19 `20652956` [L2441](https://github.com/git/git/blob/master/ref-filter.c#L2441)

  ```
  /**
   * NEEDSWORK: The following code might be unnecessary if all codepaths
   * that call populate_value() populates the symref member of ref_array_item
   * like in apply_ref_filter(). Currently pretty_print_ref() is the only codepath
   * that calls populate_value() without first populating symref.
   */
  ```

- 2015-07-07 `68411046` [L2835](https://github.com/git/git/blob/master/ref-filter.c#L2835)

  ```
  /*
   * Given a ref (oid, refname), check if the ref belongs to the array
   * of oids. If the given ref is a tag, check if the given tag points
   * at one of the oids in the given oid array. Returns non-zero if a
   * match is found.
   *
   * NEEDSWORK:
   * As the refs are cached we might know what refname peels to without
   * the need to parse the object via parse_object(). peel_ref() might be a
   * more efficient alternative to obtain the pointee.
   */
  ```


`refs.c` (2)

- 2022-08-05 `b877e617` [L599](https://github.com/git/git/blob/master/refs.c#L599)

  ```
  /*
   * NEEDSWORK: Special case other symrefs such as REBASE_HEAD,
   * MERGE_HEAD, etc.
   */
  ```

- 2026-02-25 `01dc8459` [L2345](https://github.com/git/git/blob/master/refs.c#L2345)

  ```
  /*
   * TODO Send in a 'struct worktree' instead of a 'gitdir', and
   * allow the backend to handle how it wants to deal with worktrees.
   */
  ```


`remote-curl.c` (1)

- 2018-03-15 `a4d78ce2` [L495](https://github.com/git/git/blob/master/remote-curl.c#L495)

  ```
  /*
   * NEEDSWORK: If we are trying to use protocol v2 and we are planning
   * to perform any operation that doesn't involve upload-pack (i.e., a
   * fetch, ls-remote, etc), then fallback to v0 since we don't know how
   * to do anything else (like push or remote archive) via v2.
   */
  ```


`remote.h` (2)

- 2022-05-16 `1d04e719` [L465](https://github.com/git/git/blob/master/remote.h#L465) `* NEEDSWORK: This works incorrectly on the domain and protocol part.`
- 2022-05-16 `1d04e719` [L475](https://github.com/git/git/blob/master/remote.h#L475) `* NEEDSWORK: Given how chop_last_dir() works, this function is broken`

`repack-promisor.c` (2)

- 2025-10-15 `29e93551` [L60](https://github.com/git/git/blob/master/repack-promisor.c#L60)

  ```
  /*
   * pack-objects creates the .pack and .idx files, but not the
   * .promisor file. Create the .promisor file, which is empty.
   *
   * NEEDSWORK: fetch-pack sometimes generates non-empty
   * .promisor files containing the ref names and associated
   * hashes at the point of generation of the corresponding
   * packfile, but this would not preserve their contents. Maybe
   * concatenate the contents of all .promisor files instead of
   * just creating a new empty file.
   */
  ```

- 2026-01-05 `dd8c4e12` [L93](https://github.com/git/git/blob/master/repack-promisor.c#L93)

  ```
  /*
   * NEEDSWORK: Giving pack-objects only the OIDs without any ordering
   * hints may result in suboptimal deltas in the resulting pack. See if
   * the OIDs can be sent with fake paths such that pack-objects can use a
   * {type -> existing pack order} ordering when computing deltas instead
   * of a {type -> size} ordering, which may produce better deltas.
   */
  ```


`replay.c` (1)

- 2026-01-13 `6aeda3cf` [L94](https://github.com/git/git/blob/master/replay.c#L94) `char *sign_commit = NULL; /* FIXME: cli users might want to sign again`

`rerere.c` (4)

- 2015-06-30 `4b68c2a0` [L527](https://github.com/git/git/blob/master/rerere.c#L527)

  ```
  /*
   * Scan the index and find paths that have conflicts that rerere can
   * handle, i.e. the ones that have both stages #2 and #3.
   *
   * NEEDSWORK: we do not record or replay a previous "resolve by
   * deletion" for a delete-modify conflict, as that is inherently risky
   * without knowing what modification is being discarded.  The only
   * safe case, i.e. both side doing the deletion and modification that
   * are identical to the previous round, might want to be handled,
   * though.
   */
  ```

- 2015-06-30 `4b68c2a0` [L563](https://github.com/git/git/blob/master/rerere.c#L563)

  ```
  /*
   * The merge_rr list is meant to hold outstanding conflicted paths
   * that rerere could handle.  Abuse the list by adding other types of
   * entries to allow the caller to show "rerere remaining".
   *
   * - Conflicted paths that rerere does not handle are added
   * - Conflicted paths that have been resolved are marked as such
   *   by storing RERERE_RESOLVED to .util field (where conflict ID
   *   is expected to be stored).
   *
   * Do *not* write MERGE_RR file out after calling this function.
   *
   * NEEDSWORK: we may want to fix the caller that implements "rerere
   * remaining" to do this without abusing merge_rr.
   */
  ```

- 2016-03-14 `3d730ed9` [L987](https://github.com/git/git/blob/master/rerere.c#L987)

  ```
  /*
   * NEEDSWORK: handle conflicts from merges with
   * merge.renormalize set, too?
   */
  ```

- 2015-06-30 `e828de82` [L1264](https://github.com/git/git/blob/master/rerere.c#L1264)

  ```
  /*
   * During a conflict resolution, after "rerere" recorded the
   * preimages, abandon them if the user did not resolve them or
   * record their resolutions.  And drop $GIT_DIR/MERGE_RR.
   *
   * NEEDSWORK: shouldn't we be calling this from "reset --hard"?
   */
  ```


`reset.c` (1)

- 2021-09-27 `1b5f3733` [L169](https://github.com/git/git/blob/master/reset.c#L169) `unpack_tree_opts.preserve_ignored = 0; /* FIXME: !overwrite_ignore */`

`resolve-undo.c` (1)

- 2021-04-01 `dc26b23e` [L163](https://github.com/git/git/blob/master/resolve-undo.c#L163) `/* TODO: audit for interaction with sparse-index. */`

`revision.c` (2)

- 2010-04-20 `ebdc94f3` [L1388](https://github.com/git/git/blob/master/revision.c#L1388)

  ```
  /*
   * NEEDSWORK: decide if we want to remove parents that are
   * not marked with TMP_MARK from commit->parents for commits
   * in the resulting list.  We may not want to do that, though.
   */
  ```

- 2021-04-01 `f5fed74f` [L1810](https://github.com/git/git/blob/master/revision.c#L1810) `/* TODO: audit for interaction with sparse-index. */`

`run-command.c` (1)

- 2015-12-15 `c553c72e` [L1861](https://github.com/git/git/blob/master/run-command.c#L1861)

  ```
  /*
   * Pick next process to output live.
   * NEEDSWORK:
   * For now we pick it randomly by doing a round
   * robin. Later we may want to pick the one with
   * the most output or the longest or shortest
   * running process time.
   */
  ```


`send-pack.c` (2)

- 2014-09-12 `a85b377d` [L342](https://github.com/git/git/blob/master/send-pack.c#L342)

  ```
  /*
   * the beginning of the next line, or the end of buffer.
   *
   * NEEDSWORK: perhaps move this to git-compat-util.h or somewhere and
   * convert many similar uses found by "git grep -A4 memchr".
   */
  ```

- 2014-08-12 `621b0599` [L637](https://github.com/git/git/blob/master/send-pack.c#L637)

  ```
  /*
   * NEEDSWORK: why does delete-refs have to be so specific to
   * send-pack machinery that set_ref_status_for_push() cannot
   * set this bit for us???
   */
  ```


`sequencer.c` (4)

- 2020-11-02 `14c4586c` [L785](https://github.com/git/git/blob/master/sequencer.c#L785)

  ```
  /*
   * TODO: merge_switch_to_result will update index/working tree;
   * we only really want to do that if !result.clean || this is
   * the final patch to be picked.  But determining this is the
   * final patch would take some work, and "head_tree" would need
   * to be replace with the tree the index matched before we
   * started doing any picks.
   */
  ```

- 2021-09-27 `1b5f3733` [L4124](https://github.com/git/git/blob/master/sequencer.c#L4124) `unpack_tree_opts.preserve_ignored = 0; /* FIXME: !overwrite_ignore */`
- 2020-11-02 `14c4586c` [L4417](https://github.com/git/git/blob/master/sequencer.c#L4417)

  ```
  /*
   * TODO: Should use merge_incore_recursive() and
   * merge_switch_to_result(), skipping the call to
   * merge_switch_to_result() when we don't actually need to
   * update the index and working copy immediately.
   */
  ```

- 2026-07-15 `42554b78` [L5041](https://github.com/git/git/blob/master/sequencer.c#L5041)

  ```
  /*
   * NEEDSWORK: Do not record the commit as rewritten when
   * continuing if it was dropped. Does it even make sense
   * to stop if the commit was dropped?
   */
  ```


`setup.c` (1)

- 2017-06-20 `73f192c9` [L2049](https://github.com/git/git/blob/master/setup.c#L2049)

  ```
  /*
   * Not all paths through the setup code will have recorded a gitdir
   * above, so in order to guarantee that the environment is in a
   * consistent state after setup, explicitly set up the gitdir and
   * environment if we have a repository.
   *
   * NEEDSWORK: currently we allow bogus GIT_DIR values to be set in some
   * code paths so we also need to explicitly setup the environment if
   * the user has set GIT_DIR.  It may be beneficial to disallow bogus
   * GIT_DIR values at some point in the future.
   */
  ```


`shallow.c` (2)

- 2018-05-19 `58dbe58f` [L123](https://github.com/git/git/blob/master/shallow.c#L123)

  ```
  /*
   * TODO: use "int" elemtype instead of "int *" when/if commit-slab
   * supports a "valid" flag.
   */
  ```

- 2013-12-05 `8e277383` [L641](https://github.com/git/git/blob/master/shallow.c#L641) `/* XXX check "UNINTERESTING" from pack bitmaps if available */`

`sparse-index.c` (1)

- 2021-07-14 `fc6609d1` [L225](https://github.com/git/git/blob/master/sparse-index.c#L225)

  ```
  /*
   * NEEDSWORK: If we have unmerged entries, then stay full.
   * Unmerged entries prevent the cache-tree extension from working.
   */
  ```


`submodule.c` (7)

- 2021-08-06 `a452128a` [L235](https://github.com/git/git/blob/master/submodule.c#L235)

  ```
  /*
   * NEEDSWORK: Emit a warning if submodule.active exists, but is valueless,
   * ie, the config looks like: "[submodule] active\n".
   * Since that is an invalid pathspec, we should inform the user.
   */
  ```

- 2016-08-31 `fd47ae6a` [L684](https://github.com/git/git/blob/master/submodule.c#L684) `/* TODO: other options may need to be passed here. */`
- 2022-03-07 `b90d9f76` [L795](https://github.com/git/git/blob/master/submodule.c#L795) `* NEEDSWORK: Storing an arbitrary commit is undesirable because we can`
- 2022-03-07 `b90d9f76` [L1650](https://github.com/git/git/blob/master/submodule.c#L1650) `* NEEDSWORK: Submodules set/unset a value for`
- 2019-03-13 `bd5e567d` [L1784](https://github.com/git/git/blob/master/submodule.c#L1784)

  ```
  /*
   * NEEDSWORK: This indicates that the overall fetch
   * failed, even though there may be a subsequent fetch
   * by commit hash that might work. It may be a good
   * idea to not indicate failure in this case, and only
   * indicate failure if the subsequent fetch fails.
   */
  ```

- 2021-09-27 `94b7f156` [L2110](https://github.com/git/git/blob/master/submodule.c#L2110) `/* TODO: determine if this might overwright untracked files */`
- 2017-03-08 `bf0231c6` [L2626](https://github.com/git/git/blob/master/submodule.c#L2626)

  ```
  /*
   * FIXME:
   * We might have a superproject, but it is harder
   * to determine.
   */
  ```


`tree-walk.c` (1)

- 2018-11-18 `5a0b97b3` [L1198](https://github.com/git/git/blob/master/tree-walk.c#L1198)

  ```
  /*
   * Consider all directories interesting (because some
   * of those files inside may match some attributes
   * even though the parent dir does not)
   *
   * FIXME: attributes _can_ match directories and we
   * can probably return all_entries_interesting or
   * all_entries_not_interesting here if matched.
   */
  ```


`unpack-trees.c` (1)

- 2023-02-27 `13e1fd6e` [L2288](https://github.com/git/git/blob/master/unpack-trees.c#L2288)

  ```
  /*
   * TODO: We should actually invalidate o->internal.result, not src_index [1].
   * But since cache tree and untracked cache both are not copied to
   * o->internal.result until unpacking is complete, we invalidate them on
   * src_index instead with the assumption that they will be copied to
   * dst_index at the end.
   *
   * [1] src_index->cache_tree is also used in unpack_callback() so if
   * we invalidate o->internal.result, we need to update it to use
   * o->internal.result.cache_tree as well.
   */
  ```


`upload-pack.c` (1)

- 2007-01-08 `93822c22` [L193](https://github.com/git/git/blob/master/upload-pack.c#L193) `/* XXX: are we happy to lose stuff here? */`

`usage.c` (1)

- 2019-02-22 `ee4512ed` [L62](https://github.com/git/git/blob/master/usage.c#L62)

  ```
  /*
   * Currently, the (err, params) are usually just the static usage
   * string which isn't very useful here.  Usually, the call site
   * manually calls fprintf(stderr,...) with the actual detailed
   * syntax error before calling usage().
   *
   * TODO It would be nice to update the call sites to pass both
   * the static usage string and the detailed error message.
   */
  ```


`utf8.c` (2)

- 2022-12-01 `937b71cc` [L230](https://github.com/git/git/blob/master/utf8.c#L230)

  ```
  /*
   * TODO: fix the interface of this function and `utf8_strwidth()` to
   * return `size_t` instead of `int`.
   */
  ```

- 2013-03-07 `6cd3c053` [L685](https://github.com/git/git/blob/master/utf8.c#L685)

  ```
  /*
   * TODO use iconv to decode one char and obtain its chrlen
   * for now, let's treat encodings != UTF-8 as one-byte
   */
  ```


`worktree.c` (1)

- 2023-12-29 `465a22b3` [L180](https://github.com/git/git/blob/master/worktree.c#L180)

  ```
  /*
   * NEEDSWORK: This function exists so that we can look up metadata of a
   * worktree without trying to access any of its internals like the refdb. It
   * would be preferable to instead have a corruption-tolerant function for
   * retrieving worktree metadata that could be used when the worktree is known
   * to not be in a healthy state, e.g. when creating or repairing it.
   */
  ```


`wt-status.c` (1)

- 2009-12-11 `3c588453` [L235](https://github.com/git/git/blob/master/wt-status.c#L235) `; /* NEEDSWORK: use "git reset --unresolve"??? */`

</details>

<details>
<summary><b>Documentation</b> &mdash; 16 markers</summary>

`Documentation/CodingGuidelines` (4)

- 2026-02-12 `aa94ba7d` [L36](https://github.com/git/git/blob/master/Documentation/CodingGuidelines#L36) `- A label "NEEDSWORK:" followed by a description of the things to`
- 2026-02-12 `aa94ba7d` [L38](https://github.com/git/git/blob/master/Documentation/CodingGuidelines#L38) `decisions yet to be made. 80% of the work to resolve a NEEDSWORK`
- 2026-02-12 `aa94ba7d` [L42](https://github.com/git/git/blob/master/Documentation/CodingGuidelines#L42) `NEEDSWORK comment without doing anything else, with the commit log`
- 2026-02-12 `aa94ba7d` [L44](https://github.com/git/git/blob/master/Documentation/CodingGuidelines#L44) `the thing the NEEDSWORK comment mentioned.`

`Documentation/MyFirstContribution.adoc` (1)

- 2019-05-17 `76644e32` [L983](https://github.com/git/git/blob/master/Documentation/MyFirstContribution.adoc#L983) `TODO https://github.com/gitgitgadget/gitgitgadget/issues/83`

`Documentation/git-range-diff.adoc` (1)

- 2018-08-13 `ba931edd` [L170](https://github.com/git/git/blob/master/Documentation/git-range-diff.adoc#L170) `-TODO: Describe a bug`

`Documentation/git-rebase.adoc` (2)

- 2010-08-10 `cd035b1c` [L946](https://github.com/git/git/blob/master/Documentation/git-rebase.adoc#L946) `pick deadbee Implement feature XXX`
- 2010-08-10 `cd035b1c` [L947](https://github.com/git/git/blob/master/Documentation/git-rebase.adoc#L947) `fixup f1a5c00 Fix to feature XXX`

`Documentation/gitprotocol-http.adoc` (6)

- 2013-08-21 `4c6fffe2` [L366](https://github.com/git/git/blob/master/Documentation/gitprotocol-http.adoc#L366) `TODO: Document this further.`
- 2014-01-26 `586aa786` [L443](https://github.com/git/git/blob/master/Documentation/gitprotocol-http.adoc#L443) `TODO: Define error if no "want" lines are requested.`
- 2013-08-21 `4c6fffe2` [L463](https://github.com/git/git/blob/master/Documentation/gitprotocol-http.adoc#L463) `TODO: Document the pack based response`
- 2013-08-21 `4c6fffe2` [L477](https://github.com/git/git/blob/master/Documentation/gitprotocol-http.adoc#L477) `TODO: Document the non-pack response`
- 2013-08-21 `4c6fffe2` [L480](https://github.com/git/git/blob/master/Documentation/gitprotocol-http.adoc#L480) `TODO: Document parsing response`
- 2013-08-21 `4c6fffe2` [L528](https://github.com/git/git/blob/master/Documentation/gitprotocol-http.adoc#L528) `TODO: Document this further.`

`Documentation/lint-manpages.sh` (2)

- 2024-06-06 `2dd100c5` [L8](https://github.com/git/git/blob/master/Documentation/lint-manpages.sh#L8) `@\$(foreach b,\$($1),echo XXX \$(b:\$X=) YYY;)`
- 2024-06-06 `2dd100c5` [L12](https://github.com/git/git/blob/master/Documentation/lint-manpages.sh#L12) `sed -n -e 's/.*XXX \(.*\) YYY.*/\1/p'`

</details>

<details>
<summary><b>builtin</b> &mdash; 56 markers</summary>

`builtin/am.c` (1)

- 2021-09-27 `1b5f3733` [L2017](https://github.com/git/git/blob/master/builtin/am.c#L2017) `opts.preserve_ignored = 0; /* FIXME: !overwrite_ignore */`

`builtin/cat-file.c` (1)

- 2026-07-24 `0ae93f56` [L852](https://github.com/git/git/blob/master/builtin/cat-file.c#L852)

  ```
  /*
   * TODO: Use the default format once %(objecttype) is supported.
   */
  ```


`builtin/checkout.c` (2)

- 2008-08-30 `0cf8581e` [L366](https://github.com/git/git/blob/master/builtin/checkout.c#L366)

  ```
  /*
   * NEEDSWORK:
   * There is absolutely no reason to write this as a blob object
   * and create a phony cache entry.  This hack is primarily to get
   * to the write_entry() machinery that massages the contents to
   * work-tree format and writes out which only allows it for a
   * cache entry.  The code in write_entry() needs to be refactored
   * to allow us to feed a <buffer, size, mode> instead of a cache
   * entry.  Such a refactoring would help merge_recursive as well
   * (it also writes the merge result to the object database even
   * when it may contain conflicts).
   */
  ```

- 2019-04-25 `183fb44f` [L705](https://github.com/git/git/blob/master/builtin/checkout.c#L705)

  ```
  /*
   * NEEDSWORK: if --worktree is not specified, we
   * should save stat info of checked out files in the
   * index to avoid the next (potentially costly)
   * refresh. But it's a bit tricker to do...
   */
  ```


`builtin/clone.c` (1)

- 2017-03-17 `bb62e0a9` [L1149](https://github.com/git/git/blob/master/builtin/clone.c#L1149)

  ```
  /*
   * NEEDSWORK: In a multi-working-tree world, this needs to be
   * set in the per-worktree config.
   */
  ```


`builtin/commit.c` (2)

- 2021-04-01 `cb8388df` [L272](https://github.com/git/git/blob/master/builtin/commit.c#L272) `/* TODO: audit for interaction with sparse-index. */`
- 2021-04-01 `cb8388df` [L1041](https://github.com/git/git/blob/master/builtin/commit.c#L1041) `/* TODO: audit for interaction with sparse-index. */`

`builtin/config.c` (1)

- 2011-01-30 `b09c53a3` [L558](https://github.com/git/git/blob/master/builtin/config.c#L558)

  ```
  /*
   * NEEDSWORK: this naive pattern lowercasing obviously does not
   * work for more complex patterns like "^[^.]*Foo.*bar".
   * Perhaps we should deprecate this altogether someday.
   */
  ```


`builtin/difftool.c` (1)

- 2021-04-01 `48b3c7da` [L609](https://github.com/git/git/blob/master/builtin/difftool.c#L609) `/* TODO: audit for interaction with sparse-index. */`

`builtin/fast-export.c` (1)

- 2018-11-15 `fdf31b63` [L762](https://github.com/git/git/blob/master/builtin/fast-export.c#L762)

  ```
  /*
   * FIXME: string_list_remove() below for each ref is overall
   * O(N^2).  Compared to a history walk and diffing trees, this is
   * just lost in the noise in practice.  However, theoretically a
   * repo may have enough refs for this to become slow.
   */
  ```


`builtin/fast-import.c` (4)

- 2020-05-30 `d42a2fb7` [L1977](https://github.com/git/git/blob/master/builtin/fast-import.c#L1977)

  ```
  /*
   * NEEDSWORK: perhaps check for reasonable values? For example, we
   *            could error on values representing times more than a
   *            day in the future.
   */
  ```

- 2020-05-30 `d42a2fb7` [L1990](https://github.com/git/git/blob/master/builtin/fast-import.c#L1990)

  ```
  /*
   * NEEDSWORK: check for brokenness other than num > 1400, such as
   *            (num % 100) >= 60, or ((num % 100) % 15) != 0 ?
   */
  ```

- 2026-03-12 `ee66c793` [L2919](https://github.com/git/git/blob/master/builtin/fast-import.c#L2919)

  ```
  /*
   * NEEDSWORK: To properly support interoperability mode
   * when signing commit signatures, the commit buffer
   * must be provided in both the repository and
   * compatibility object formats. As currently
   * implemented, only the repository object format is
   * considered meaning compatibility signatures cannot be
   * generated. Thus, attempting to sign commit signatures
   * in interoperability mode is currently unsupported.
   */
  ```

- 2019-10-03 `3164e6bd` [L3304](https://github.com/git/git/blob/master/builtin/fast-import.c#L3304)

  ```
  /*
   * Elsewhere, we call dump_branches() before dump_tags(),
   * and dump_branches() will handle ref deletions first, so
   * in order to make sure the deletion actually takes effect,
   * we need to remove the tag from our list of tags to update.
   *
   * NEEDSWORK: replace list of tags with hashmap for faster
   * deletion?
   */
  ```


`builtin/fetch.c` (4)

- 2026-06-19 `7d00999b` [L1942](https://github.com/git/git/blob/master/builtin/fetch.c#L1942)

  ```
  /*
   * NEEDSWORK: By the time this function executes, we have already parsed
   * all such followRemoteHEAD values from the external configuration,
   * potentially emitting warning messages for bogus values.  Ideally, if
   * this fetch ends up not needing to consult these values, then git would
   * not ever output a value warning. (eg: when pulling from a URL directly -
   * rather than a configured remote, or when a remote's followRemoteHEAD
   * overrides the fallback fetch setting)
   */
  ```

- 2025-05-19 `0e358de6` [L2052](https://github.com/git/git/blob/master/builtin/fetch.c#L2052)

  ```
  /*
   * If not atomic, we can still use batched updates, which would be much
   * more performant. We don't initiate the transaction before pruning,
   * since pruning must be an independent step, to avoid F/D conflicts.
   *
   * TODO: if reference transactions gain logical conflict resolution, we
   * can delete and create refs (with F/D conflicts) in the same transaction
   * and this can be moved above the 'prune_refs()' block.
   */
  ```

- 2017-12-08 `aa57b871` [L2845](https://github.com/git/git/blob/master/builtin/fetch.c#L2845) `/* TODO should this also die if we have a previous partial-clone? */`
- 2022-01-18 `135a12bc` [L2886](https://github.com/git/git/blob/master/builtin/fetch.c#L2886)

  ```
  /*
   * Skip irrelevant tasks because we know objects were not
   * fetched.
   *
   * NEEDSWORK: as a future optimization, we can return early
   * whenever objects were not fetched e.g. if we already have all
   * of them.
   */
  ```


`builtin/fsck.c` (5)

- 2026-01-09 `f6b26258` [L532](https://github.com/git/git/blob/master/builtin/fsck.c#L532) `/* TODO: Maybe supplement with latest reflog entry info too? */`
- 2026-01-09 `f6b26258` [L539](https://github.com/git/git/blob/master/builtin/fsck.c#L539) `/* TODO: Consider also snapshotting the index of each worktree. */`
- 2026-01-09 `f6b26258` [L656](https://github.com/git/git/blob/master/builtin/fsck.c#L656)

  ```
  /*
   * TODO: Could use refs_for_each_reflog(...) to find
   * latest entry instead of using a global 'now' for that
   * purpose.
   */
  ```

- 2023-02-24 `8840069a` [L884](https://github.com/git/git/blob/master/builtin/fsck.c#L884) `/* TODO: audit for interaction with sparse-index. */`
- 2026-01-09 `f6b26258` [L1115](https://github.com/git/git/blob/master/builtin/fsck.c#L1115)

  ```
  /*
   * TODO: Consider first walking these indexes in snapshot_refs,
   * to snapshot where the index entries used to point, and then
   * check those snapshotted locations here.
   */
  ```


`builtin/fsmonitor--daemon.c` (1)

- 2022-03-25 `518a522f` [L884](https://github.com/git/git/blob/master/builtin/fsmonitor--daemon.c#L884)

  ```
  /*
   * The client request is relative to the token that they sent,
   * so walk the batch list backwards from the current head back
   * to the batch (sequence number) they named.
   *
   * We use a strset to de-dup the list of pathnames.
   *
   * NEEDSWORK: each batch contains a list of interned strings,
   * so we only need to do pointer comparisons here to build the
   * hash table.  Currently, we're still comparing the string
   * values.
   */
  ```


`builtin/gc.c` (1)

- 2025-11-08 `28b83e6f` [L3118](https://github.com/git/git/blob/master/builtin/gc.c#L3118)

  ```
  /*
   * When not using --auto we always require maintenance right now.
   *
   * TODO: this certainly is too eager, as some maintenance tasks may
   * decide to not do anything because the data structures are already
   * fully optimized. We may eventually want to extend the auto
   * condition to also cover non-auto runs so that we can detect such
   * cases.
   */
  ```


`builtin/grep.c` (2)

- 2020-01-15 `c441ea4e` [L467](https://github.com/git/git/blob/master/builtin/grep.c#L467)

  ```
  /*
   * NEEDSWORK: repo_read_gitmodules() might call
   * odb_add_to_alternates_memory() via config_from_gitmodules(). This
   * operation causes a race condition with concurrent object readings
   * performed by the worker threads. That's why we need obj_read_lock()
   * here. It should be removed once it's no longer necessary to add the
   * subrepo's odbs to the in-memory alternates list.
   */
  ```

- 2022-09-22 `7cae7627` [L477](https://github.com/git/git/blob/master/builtin/grep.c#L477) `* NEEDSWORK: when reading a submodule, the sparsity settings in the`

`builtin/history.c` (1)

- 2026-04-27 `c6c22579` [L649](https://github.com/git/git/blob/master/builtin/history.c#L649)

  ```
  /*
   * TODO: we don't yet have the ability to drop root
   * commits, but there's ultimately no good reason for
   * this restriction to exist other than a technical
   * limitation.
   */
  ```


`builtin/index-pack.c` (3)

- 2020-09-08 `f08cbf60` [L1170](https://github.com/git/git/blob/master/builtin/index-pack.c#L1170)

  ```
  /*
   * Ensure that the parent has data, since we will need
   * it later.
   *
   * NEEDSWORK: If parent data needs to be reloaded, this
   * prolongs the time that the current thread spends in
   * the mutex. A mitigating factor is that parent data
   * needs to be reloaded only if the delta base cache
   * limit is exceeded, so in the typical case, this does
   * not happen.
   */
  ```

- 2011-02-02 `e337a04d` [L1760](https://github.com/git/git/blob/master/builtin/index-pack.c#L1760)

  ```
  /*
   * Get rid of the idx file as we do not need it anymore.
   * NEEDSWORK: extract this bit from free_pack_by_name() in
   * object-file.c, perhaps?  It shouldn't matter very much as we
   * know we haven't installed this pack (hence we never have
   * read anything from it).
   */
  ```

- 2025-11-19 `8dc22e87` [L2126](https://github.com/git/git/blob/master/builtin/index-pack.c#L2126)

  ```
  /*
   * We cannot perform queued consistency checks when running
   * outside of a repository because those require us to read
   * from the object database, which is uninitialized.
   *
   * TODO: we may eventually set up an in-memory object database,
   * which would allow us to perform these queued checks.
   */
  ```


`builtin/ls-remote.c` (1)

- 2024-08-02 `9e89dcb6` [L103](https://github.com/git/git/blob/master/builtin/ls-remote.c#L103)

  ```
  /*
   * TODO: This is buggy, but required for transport helpers. When a
   * transport helper advertises a "refspec", then we'd add that to a
   * list of refspecs via `refspec_append()`, which transitively depends
   * on `the_hash_algo`. Thus, when the hash algorithm isn't properly set
   * up, this would lead to a segfault.
   *
   * We really should fix this in the transport helper logic such that we
   * lazily parse refspec capabilities _after_ we have learned about the
   * remote's object format. Otherwise, we may end up misparsing refspecs
   * depending on what object hash the remote uses.
   */
  ```


`builtin/merge-index.c` (2)

- 2021-04-01 `299e2c45` [L68](https://github.com/git/git/blob/master/builtin/merge-index.c#L68) `/* TODO: audit for interaction with sparse-index. */`
- 2021-04-01 `299e2c45` [L100](https://github.com/git/git/blob/master/builtin/merge-index.c#L100) `/* TODO: audit for interaction with sparse-index. */`

`builtin/merge-tree.c` (1)

- 2006-02-15 `164dcb97` [L317](https://github.com/git/git/blob/master/builtin/merge-tree.c#L317) `*    NOTE NOTE NOTE! FIXME! We really really need to walk the index`

`builtin/merge.c` (1)

- 2021-09-27 `1b5f3733` [L759](https://github.com/git/git/blob/master/builtin/merge.c#L759) `opts.preserve_ignored = 0; /* FIXME: !overwrite_ignore */`

`builtin/mv.c` (1)

- 2022-08-09 `5784db1b` [L621](https://github.com/git/git/blob/master/builtin/mv.c#L621)

  ```
  /*
   * NEEDSWORK: we are *not* paying attention to
   * "out-to-out" move (<source> is out-of-cone and
   * <destination> is out-of-cone) at this point. It
   * should be added in a future patch.
   */
  ```


`builtin/patch-id.c` (1)

- 2024-05-20 `4a1c9593` [L255](https://github.com/git/git/blob/master/builtin/patch-id.c#L255)

  ```
  /*
   * We rely on `the_hash_algo` to compute patch IDs. This is dubious as
   * it means that the hash algorithm now depends on the object hash of
   * the repository, even though git-patch-id(1) clearly defines that
   * patch IDs always use SHA1.
   *
   * NEEDSWORK: This hack should be removed in favor of converting
   * the code that computes patch IDs to always use SHA1.
   */
  ```


`builtin/pull.c` (1)

- 2015-06-18 `1678b81e` [L606](https://github.com/git/git/blob/master/builtin/pull.c#L606)

  ```
  /**
   * Derives the remote-tracking branch from the remote and refspec.
   *
   * FIXME: The current implementation assumes the default mapping of
   * refs/heads/<branch_name> to refs/remotes/<remote_name>/<branch_name>.
   */
  ```


`builtin/read-tree.c` (1)

- 2014-06-13 `5a092ceb` [L194](https://github.com/git/git/blob/master/builtin/read-tree.c#L194)

  ```
  /*
   * NEEDSWORK
   *
   * The old index should be read anyway even if we're going to
   * destroy all index entries because we still need to preserve
   * certain information such as index version or split-index
   * mode.
   */
  ```


`builtin/receive-pack.c` (2)

- 2026-03-30 `8151f4fe` [L1419](https://github.com/git/git/blob/master/builtin/receive-pack.c#L1419)

  ```
  /*
   * diff-index with either HEAD or an empty tree
   *
   * NEEDSWORK: is_null_oid() cannot know whether it's an
   * unborn HEAD or a corrupt ref. It works for now because
   * it's only needed to know if we are comparing HEAD or an
   * empty tree.
   */
  ```

- 2025-06-20 `5c697f0b` [L1917](https://github.com/git/git/blob/master/builtin/receive-pack.c#L1917)

  ```
  /*
   * Reference updates, where D/F conflicts shouldn't arise due to
   * one reference being deleted, while the other being created
   * are treated as conflicts in batched updates. This is because
   * we don't do conflict resolution inside a transaction. To
   * mitigate this, delete references in a separate batch.
   *
   * NEEDSWORK: Add conflict resolution between deletion and creation
   * of reference updates within a transaction. With that, we can
   * combine the two phases.
   */
  ```


`builtin/replay.c` (1)

- 2023-11-24 `8259e415` [L154](https://github.com/git/git/blob/master/builtin/replay.c#L154)

  ```
  /*
   * Set desired values for rev walking options here. If they
   * are changed by some user specified option in setup_revisions()
   * below, we will detect that below and then warn.
   *
   * TODO: In the future we might want to either die(), or allow
   * some options changing these values if we think they could
   * be useful.
   */
  ```


`builtin/reset.c` (1)

- 2021-09-27 `1b5f3733` [L83](https://github.com/git/git/blob/master/builtin/reset.c#L83) `opts.preserve_ignored = 0; /* FIXME: !overwrite_ignore */`

`builtin/rev-list.c` (1)

- 2025-07-21 `f31abb42` [L731](https://github.com/git/git/blob/master/builtin/rev-list.c#L731)

  ```
  /*
   * NEEDSWORK: The next loop is utterly broken.  It tries to
   * notice an option is used, but without understanding if each
   * option takes an argument, which fundamentally would not
   * work.  It would not know "--grep
   * --exclude-promisor-objects" is not triggering
   * "--exclude-promisor-objects" option, for example.
   *
   * We really need setup_revisions() to have a mechanism to
   * allow and disallow some sets of options for different
   * commands (like rev-list, replay, etc). Such a mechanism
   * should do an early parsing of options and be able to manage
   * the `--missing=...` and `--exclude-promisor-objects`
   * options below.
   */
  ```


`builtin/shortlog.c` (1)

- 2024-10-17 `b3300164` [L413](https://github.com/git/git/blob/master/builtin/shortlog.c#L413)

  ```
  /*
   * NEEDSWORK: Later on we'll call parse_revision_opt which relies on
   * the hash algorithm being set but since we are operating outside of a
   * Git repository we cannot determine one. This is only needed because
   * parse_revision_opt expects hexsz for --abbrev which is irrelevant
   * for shortlog outside of a git repository. For now explicitly set
   * SHA1, but ideally the parsing machinery would be split between
   * git/nongit so that we do not have to do this.
   */
  ```


`builtin/show-branch.c` (1)

- 2018-05-19 `44cecbf8` [L38](https://github.com/git/git/blob/master/builtin/show-branch.c#L38)

  ```
  /*
   * TODO: convert this use of commit->object.flags to commit-slab
   * instead to store a pointer to ref name directly. Then use the same
   * UNINTERESTING definition from revision.h here.
   */
  ```


`builtin/show-index.c` (1)

- 2026-01-30 `ea39808a` [L46](https://github.com/git/git/blob/master/builtin/show-index.c#L46)

  ```
  /*
   * Fallback to SHA1 if we are running outside of a repository.
   *
   * TODO: If a future implementation of index file version encodes the hash
   *       algorithm in its header, enable show-index to infer it from the
   *       header rather than relying on repository context or a default fallback.
   */
  ```


`builtin/stash.c` (1)

- 2021-09-27 `1b5f3733` [L363](https://github.com/git/git/blob/master/builtin/stash.c#L363) `opts.preserve_ignored = 0; /* FIXME: !overwrite_ignore */`

`builtin/submodule--helper.c` (7)

- 2018-05-10 `fc1b9243` [L360](https://github.com/git/git/blob/master/builtin/submodule--helper.c#L360)

  ```
  /*
   * NEEDSWORK: the command currently has access to the variables $name,
   * $sm_path, $displaypath, $sha1 and $toplevel only when the command
   * contains a single argument. This is done for maintaining a faithful
   * translation from shell script.
   */
  ```

- 2017-03-17 `1f8d7115` [L592](https://github.com/git/git/blob/master/builtin/submodule--helper.c#L592)

  ```
  /*
   * NEEDSWORK: In a multi-working-tree world, this needs to be
   * set in the per-worktree config.
   *
   * Set active flag for the submodule being initialized
   */
  ```

- 2025-11-15 `dd8e8c78` [L2120](https://github.com/git/git/blob/master/builtin/submodule--helper.c#L2120)

  ```
  /*
   * NEEDSWORK: audit and ensure that update_submodule() has right
   * to assume that submodule_from_path() above will always succeed.
   */
  ```

- 2024-03-26 `e8d06089` [L2952](https://github.com/git/git/blob/master/builtin/submodule--helper.c#L2952)

  ```
  /*
   * Verify that the submodule path does not contain any
   * symlinks; if it does, it might have been tampered with.
   * TODO: allow exempting it via
   * `safe.submodule.path` or something
   */
  ```

- 2021-08-06 `a452128a` [L3559](https://github.com/git/git/blob/master/builtin/submodule--helper.c#L3559)

  ```
  /*
   * NEEDSWORK: In a multi-working-tree world this needs to be
   * set in the per-worktree config.
   */
  ```

- 2021-08-06 `a452128a` [L3563](https://github.com/git/git/blob/master/builtin/submodule--helper.c#L3563)

  ```
  /*
   * NEEDSWORK: In the longer run, we need to get rid of this
   * pattern of querying "submodule.active" before calling
   * is_submodule_active(), since that function needs to find
   * out the value of "submodule.active" again anyway.
   */
  ```

- 2021-08-10 `a6226fd7` [L3605](https://github.com/git/git/blob/master/builtin/submodule--helper.c#L3605) `/* TODO: audit for interaction with sparse-index. */`

</details>

<details>
<summary><b>compat</b> &mdash; 8 markers</summary>

`compat/fsmonitor/fsm-listen-win32.c` (1)

- 2022-05-26 `39664e93` [L439](https://github.com/git/git/blob/master/compat/fsmonitor/fsm-listen-win32.c#L439)

  ```
  /*
   * GetOverlappedResult() fails if the watched directory is
   * deleted while we were waiting for an overlapped IO to
   * complete.  The documentation did not list specific errors,
   * but I observed ERROR_ACCESS_DENIED (0x05) errors during
   * testing.
   *
   * Note that we only get notification events for events
   * *within* the directory, not *on* the directory itself.
   * (These might be properties of the parent directory, for
   * example).
   *
   * NEEDSWORK: We might try to check for the deleted directory
   * case and return a better error message, but I'm not sure it
   * is worth it.
   *
   * Shutdown if we get any error.
   */
  ```


`compat/regex/regex_internal.c` (1)

- 2010-08-17 `d18f76dc` [L749](https://github.com/git/git/blob/master/compat/regex/regex_internal.c#L749)

  ```
  /* XXX Don't use mbrtowc, we know which conversion
     to use (UTF-8 -> UCS4).  */
  ```


`compat/regex/regexec.c` (6)

- 2010-08-17 `d18f76dc` [L2434](https://github.com/git/git/blob/master/compat/regex/regexec.c#L2434)

  ```
  /* TODO: This isn't efficient.
    Because there might be more than one nodes whose types are
    OP_OPEN_SUBEXP and whose index is SUBEXP_IDX, we must check all
    nodes.
    E.g. RE: (a){2}  */
  ```

- 2010-08-17 `d18f76dc` [L2854](https://github.com/git/git/blob/master/compat/regex/regexec.c#L2854)

  ```
  /* Find the first node which is '(' or ')' and whose index is SUBEXP_IDX.
     Search '(' if FL_OPEN, or search ')' otherwise.
     TODO: This function isn't efficient...
  	 Because there might be more than one nodes whose types are
  	 OP_OPEN_SUBEXP and whose index is SUBEXP_IDX, we must check all
  	 nodes.
  	 E.g. RE: (a){2}  */
  ```

- 2010-08-17 `d18f76dc` [L3039](https://github.com/git/git/blob/master/compat/regex/regexec.c#L3039)

  ```
  /* Calculate the destination nodes of CUR_NODES at STR_IDX, and append them
     to NEXT_NODES.
     TODO: This function is similar to the functions transit_state*(),
  	 however this function has many additional works.
  	 Can't we unify them?  */
  ```

- 2010-08-17 `d18f76dc` [L3267](https://github.com/git/git/blob/master/compat/regex/regexec.c#L3267) `/* TODO: It is still inefficient...  */`
- 2010-08-17 `d18f76dc` [L3804](https://github.com/git/git/blob/master/compat/regex/regexec.c#L3804)

  ```
      /* FIXME: I don't think this if is needed, as both '\n'
  and '\0' are char_len == 1.  */
  ```

- 2010-08-17 `d18f76dc` [L4112](https://github.com/git/git/blob/master/compat/regex/regexec.c#L4112)

  ```
      /* XXX We have no indication of the size of this buffer.  If this
  allocation fail we have no indication that the state_log array
  does not have the right size.  */
  ```


</details>

<details>
<summary><b>contrib</b> &mdash; 11 markers</summary>

`contrib/buildsystems/CMakeLists.txt` (2)

- 2020-06-26 `f1f5dff9` [L98](https://github.com/git/git/blob/master/contrib/buildsystems/CMakeLists.txt#L98) `#TODO gitk git-gui gitweb`
- 2020-06-26 `f7adba41` [L99](https://github.com/git/git/blob/master/contrib/buildsystems/CMakeLists.txt#L99) `#TODO Enable NLS on windows natively`

`contrib/completion/git-completion.bash` (6)

- 2013-01-11 `fea16b47` [L592](https://github.com/git/git/blob/master/contrib/completion/git-completion.bash#L592)

  ```
  # XXX does not work when the directory prefix contains a tilde,
  # since tilde expansion is not applied.
  # This means that COMPREPLY will be empty and Bash default
  # completion will be used.
  ```

- 2013-01-11 `fea16b47` [L1449](https://github.com/git/git/blob/master/contrib/completion/git-completion.bash#L1449)

  ```
  # Try to count non option arguments passed on the command line for the
  # specified git command.
  # When options are used, it is necessary to use the special -- option to
  # tell the implementation were non option arguments begin.
  # XXX this can not be improved, since options can appear everywhere, as
  # an example:
  #	git mv x -n y
  #
  # __git_count_arguments requires 1 argument: the git command executed.
  ```

- 2013-01-11 `fea16b47` [L1816](https://github.com/git/git/blob/master/contrib/completion/git-completion.bash#L1816) `# XXX should we check for -x option ?`
- 2013-01-11 `fea16b47` [L2165](https://github.com/git/git/blob/master/contrib/completion/git-completion.bash#L2165)

  ```
  # XXX ignore options like --modified and always suggest all cached
  # files.
  ```

- 2023-12-03 `a1fbe26a` [L3380](https://github.com/git/git/blob/master/contrib/completion/git-completion.bash#L3380)

  ```
  # Since sparse-index is limited to cone-mode, in non-cone-mode the
  # list of valid paths is precisely the cached files in the index.
  #
  # NEEDSWORK:
  #   1) We probably need to take care of cases where ls-files
  #      responds with special quoting.
  #   2) We probably need to take care of cases where ${cur} has
  #      some kind of special quoting.
  #   3) On top of any quoting from 1 & 2, we have to provide an extra
  #      level of quoting for any paths that contain a '*', '?', '\',
  #      '[', ']', or leading '#' or '!' since those will be
  #      interpreted by sparse-checkout as something other than a
  #      literal path character.
  # Since there are two types of quoting here, this might get really
  # complex.  For now, just punt on all of this...
  ```

- 2021-03-24 `61318078` [L3488](https://github.com/git/git/blob/master/contrib/completion/git-completion.bash#L3488) `# NEEDSWORK: can we somehow unify this with the options in _git_log() `

`contrib/credential/netrc/git-credential-netrc.perl` (1)

- 2013-02-25 `54829209` [L51](https://github.com/git/git/blob/master/contrib/credential/netrc/git-credential-netrc.perl#L51) `# TODO: maybe allow the token map $options{tmap} to be configurable.`

`contrib/libgit-rs/Cargo.toml` (1)

- 2025-01-29 `65c10aa8` [L6](https://github.com/git/git/blob/master/contrib/libgit-rs/Cargo.toml#L6) `rust-version = "1.63" # TODO: Once we hit 1.84 or newer, we may want t`

`contrib/libgit-sys/Cargo.toml` (1)

- 2025-01-28 `e7f8bf12` [L7](https://github.com/git/git/blob/master/contrib/libgit-sys/Cargo.toml#L7) `rust-version = "1.63" # TODO: Once we hit 1.84 or newer, we may want t`

</details>

<details>
<summary><b>git-gui</b> &mdash; 7 markers</summary>

`git-gui/git-gui.sh` (2)

- 2009-08-11 `dd6451f9` [L841](https://github.com/git/git/blob/master/git-gui/git-gui.sh#L841) `# TODO: this option should be added to the git-config documentation`
- 2010-01-24 `a9fa11fe` [L2100](https://github.com/git/git/blob/master/git-gui/git-gui.sh#L2100)

  ```
  # GIT_DIR and GIT_WORK_TREE for the submodule are not the ones
  # we've been using for the main repository, so unset them.
  # TODO we could make life easier (start up faster?) for gitk
  # by setting these to the appropriate values to allow gitk
  # to skip the heuristics to find their proper value
  ```


`git-gui/lib/index.tcl` (2)

- 2007-07-21 `1ac17950` [L496](https://github.com/git/git/blob/master/git-gui/lib/index.tcl#L496)

  ```
  # Split question between singular and plural cases, because
  # such distinction is needed in some languages. Previously, the
  # code used "Revert changes in" for both, but that can't work
  # in languages where 'in' must be combined with word from
  # rest of string (in different way for both cases of course).
  #
  # FIXME: Unfortunately, even that isn't enough in some languages
  # as they have quite complex plural-form rules. Unfortunately,
  # msgcat doesn't seem to support that kind of string
  # translation.
  #
  ```

- 2019-12-01 `fa38ab68` [L539](https://github.com/git/git/blob/master/git-gui/lib/index.tcl#L539)

  ```
  # Split question between singular and plural cases, because
  # such distinction is needed in some languages.
  #
  # FIXME: Unfortunately, even that isn't enough in some languages
  # as they have quite complex plural-form rules. Unfortunately,
  # msgcat doesn't seem to support that kind of string
  # translation.
  #
  ```


`git-gui/lib/remote.tcl` (1)

- 2008-09-24 `ba6485e0` [L291](https://github.com/git/git/blob/master/git-gui/lib/remote.tcl#L291)

  ```
  # XXX: Better re-read the config so that we will never get out
  # of sync with git remote implementation?
  ```


`git-gui/lib/remote_add.tcl` (1)

- 2008-09-24 `ba6485e0` [L105](https://github.com/git/git/blob/master/git-gui/lib/remote_add.tcl#L105)

  ```
  # XXX: We abuse check-ref-format here, but
  # that should be ok.
  ```


`git-gui/po/zh_cn.po` (1)

- 2008-01-06 `312fd92b` [L21](https://github.com/git/git/blob/master/git-gui/po/zh_cn.po#L21)

  ```
  #
  # 	repository	版本库
  # 	commit		提交
  # 	revision	版本
  # 	branch		分支
  # 	tag		标签
  # 	annotation	标注
  # 	merge		合并
  # 	fast forward	快速合并(??)
  # 	stage		缓存 (译自 index/cache)
  # 	amend		修正
  # 	reset		复位
  #
  # 2008-01-06 Eric Miao <eric.y.miao@gmail.com>
  # FIXME: checkout 的标准翻译
  #
  ```


</details>

<details>
<summary><b>gitk-git</b> &mdash; 4 markers</summary>

`gitk-git/gitk` (2)

- 2008-11-18 `cdc8429c` [L9933](https://github.com/git/git/blob/master/gitk-git/gitk#L9933) `# XXX this isn't right if we have a path limit...`
- 2013-04-27 `8f3ff933` [L9993](https://github.com/git/git/blob/master/gitk-git/gitk#L9993) `# XXX this isn't right if we have a path limit...`

`gitk-git/po/fr.po` (2)

- 2010-01-12 `5cc0f821` [L42](https://github.com/git/git/blob/master/gitk-git/po/fr.po#L42) `# FIXME : améliorer la traduction de 'file limite'`
- 2010-01-12 `5cc0f821` [L938](https://github.com/git/git/blob/master/gitk-git/po/fr.po#L938) `# FIXME : Traduction standard de "pane"?`

</details>

<details>
<summary><b>gitweb</b> &mdash; 3 markers</summary>

`gitweb/gitweb.perl` (3)

- 2008-10-10 `1b2d297e` [L846](https://github.com/git/git/blob/master/gitweb/gitweb.perl#L846)

  ```
  # input parameters are stored with the long parameter name as key. This will
  # also be used in the href subroutine to convert parameters to their CGI
  # equivalent, and since the href() usage is the most frequent one, we store
  # the name -> CGI key mapping here, instead of the reverse.
  #
  # XXX: Warning: If you touch this, check the search form for updating,
  # too.
  ```

- 2009-02-07 `7e1100e9` [L6666](https://github.com/git/git/blob/master/gitweb/gitweb.perl#L6666)

  ```
  # If XSS prevention is on, we don't include README.html.
  # TODO: Allow a readme in some safe format.
  ```

- 2006-09-22 `cae1862a` [L7251](https://github.com/git/git/blob/master/gitweb/gitweb.perl#L7251) `# FIXME: Should be available when we have no hash base as well.`

</details>

<details>
<summary><b>odb</b> &mdash; 1 markers</summary>

`odb/source-loose.c` (1)

- 2026-06-01 `87af3bb4` [L972](https://github.com/git/git/blob/master/odb/source-loose.c#L972) `/* TODO: this is a known omission that we'll want to address eventuall`

</details>

<details>
<summary><b>perl</b> &mdash; 9 markers</summary>

`perl/Git.pm` (4)

- 2006-06-24 `d5c7721d` [L89](https://github.com/git/git/blob/master/perl/Git.pm#L89) `TODO: In the future, we might also do`
- 2006-09-23 `18b0fc1c` [L918](https://github.com/git/git/blob/master/perl/Git.pm#L918) `# TODO: Support for passing FILEHANDLE instead of FILENAME`
- 2008-05-23 `7182530d` [L934](https://github.com/git/git/blob/master/perl/Git.pm#L934) `# TODO: Support for passing FILEHANDLE instead of FILENAME`
- 2006-06-25 `a6065b54` [L1745](https://github.com/git/git/blob/master/perl/Git.pm#L1745)

  ```
  # FIXME: This is probably horrible idea and the thing will explode
  # at the moment you give it arguments that require some quoting,
  # but I have no ActiveState clue... --pasky
  # Let's just hope ActiveState Perl does at least the quoting
  # correctly.
  ```


`perl/Git/SVN.pm` (2)

- 2012-07-26 `29499c0b` [L762](https://github.com/git/git/blob/master/perl/Git/SVN.pm#L762)

  ```
  # FIXME: Fragile, if SVN adds new public properties,
  # this needs to be updated.
  ```

- 2021-10-29 `412e4cae` [L2272](https://github.com/git/git/blob/master/perl/Git/SVN.pm#L2272) `# TODO: move this to Git.pm?`

`perl/Git/SVN/Editor.pm` (2)

- 2014-12-07 `83c9433e` [L303](https://github.com/git/git/blob/master/perl/Git/SVN/Editor.pm#L303)

  ```
  # TODO: get existing properties to compare to
  # - this fails for add so currently not done
  # my $existing_props = ::get_svnprops($file);
  ```

- 2014-12-07 `83c9433e` [L307](https://github.com/git/git/blob/master/perl/Git/SVN/Editor.pm#L307)

  ```
  # TODO: caching svn properties or storing them in .gitattributes
  # would make that faster
  ```


`perl/Git/SVN/Log.pm` (1)

- 2012-07-26 `b74fda1c` [L32](https://github.com/git/git/blob/master/perl/Git/SVN/Log.pm#L32) `# TODO: make $c->{l} not have a trailing newline in the future`

</details>

<details>
<summary><b>po</b> &mdash; 22 markers</summary>

`po/AGENTS.md` (7)

- 2026-02-25 `6f8e885f` [L758](https://github.com/git/git/blob/master/po/AGENTS.md#L758) `TODO="po/review-todo.json"`
- 2026-02-25 `6f8e885f` [L764](https://github.com/git/git/blob/master/po/AGENTS.md#L764) `rm -f "$TODO"`
- 2026-02-25 `6f8e885f` [L770](https://github.com/git/git/blob/master/po/AGENTS.md#L770) `rm -f "$BATCH_FILE" "$TODO" "$DONE"`
- 2026-02-25 `6f8e885f` [L779](https://github.com/git/git/blob/master/po/AGENTS.md#L779) `rm -f "$TODO"`
- 2026-02-25 `6f8e885f` [L803](https://github.com/git/git/blob/master/po/AGENTS.md#L803) `git-po-helper msg-select --json --head "$NUM" -o "$TODO" "$PENDING"`
- 2026-02-25 `6f8e885f` [L834](https://github.com/git/git/blob/master/po/AGENTS.md#L834) `TODO="po/review-todo.json"`
- 2026-02-25 `6f8e885f` [L843](https://github.com/git/git/blob/master/po/AGENTS.md#L843) `rm -f "$TODO"`

`po/bg.po` (3)

- 2014-06-27 `642c7fab` [L281](https://github.com/git/git/blob/master/po/bg.po#L281)

  ```
  # submodule подмодул
  # credential идентификационни данни
  # backfill допълване на информация
  # negotiate/negotiation договарям, договаряне
  # API програмен интерфейс, библиотека
  # compact уплътнявам
  # compaction уплътняване
  # ------------------------
  # „$var“ - може да не сработва за shell има gettext и eval_gettext - проверка - намират се лесно по „$
  # ------------------------
  # табулация в началото на реда се заменя с четири интервала
  # по подобен начин отстъпът на примерна команда е четири интервала
  # ------------------------
  #
  # FIXME
  # git fetch --al работи подобно на --all
  #
  #
  #
  #
  # ----
  #
  # TODO
  # Причастно-страдателни форми (бъде отворен) -> Възвратно-страдателни форми (се отвори)
  # <ТЕРМИН> -> ТЕРМИН
  #
  # ------------------------
  # export PO_FILE=bg.po
  # msgattrib --only-fuzzy  $PO_FILE > todo1.po
  ```

- 2023-08-05 `f42a8bb3` [L289](https://github.com/git/git/blob/master/po/bg.po#L289)

  ```
  # „$var“ - може да не сработва за shell има gettext и eval_gettext - проверка - намират се лесно по „$
  # ------------------------
  # табулация в началото на реда се заменя с четири интервала
  # по подобен начин отстъпът на примерна команда е четири интервала
  # ------------------------
  #
  # FIXME
  # git fetch --al работи подобно на --all
  #
  #
  #
  #
  # ----
  #
  # TODO
  # Причастно-страдателни форми (бъде отворен) -> Възвратно-страдателни форми (се отвори)
  # <ТЕРМИН> -> ТЕРМИН
  #
  # ------------------------
  # export PO_FILE=bg.po
  # msgattrib --only-fuzzy  $PO_FILE > todo1.po
  # msgattrib --untranslated  $PO_FILE > todo2.po
  # msgcat todo1.po todo2.po > todo.po
  # grep '^#: ' todo.po | sed 's/^#: //' | tr ' ' '\n' | sed 's/:[0-9]*$//' > FILES
  # for i in `sort -u FILES`; do cnt=`grep $i FILES | wc -l`; echo $cnt $i ;done | sort -n
  ```

- 2022-06-12 `4ab81452` [L17547](https://github.com/git/git/blob/master/po/bg.po#L17547) `# FIXME - как да обърна реда на форматите? Нито %2$.*ls, нито %.*2$ls,`

`po/de.po` (5)

- 2022-06-19 `13608fdc` [L10560](https://github.com/git/git/blob/master/po/de.po#L10560) `msgstr "Konnte TODO-Liste nicht erzeugen."`
- 2022-06-19 `13608fdc` [L10728](https://github.com/git/git/blob/master/po/de.po#L10728) `msgstr "TODO-Liste während eines interaktiven Rebase bearbeiten"`
- 2022-06-19 `13608fdc` [L19914](https://github.com/git/git/blob/master/po/de.po#L19914) `"Sie bearbeiten gerade die TODO-Datei eines laufenden interaktiven Reb`
- 2022-06-19 `13608fdc` [L21904](https://github.com/git/git/blob/master/po/de.po#L21904) `"Konnte TODO-Befehl nicht ausführen\n"`
- 2022-06-19 `13608fdc` [L21909](https://github.com/git/git/blob/master/po/de.po#L21909) `"bearbeiten Sie bitte zuerst die TODO-Liste:\n"`

`po/es.po` (1)

- 2022-06-16 `69635e52` [L18367](https://github.com/git/git/blob/master/po/es.po#L18367) `"Estás editando el archivo TODO de un rebase interactivo.\n"`

`po/ko.po` (4)

- 2016-11-04 `de7011c1` [L3628](https://github.com/git/git/blob/master/po/ko.po#L3628) `# FIXME: "parent %d" 번호가 무슨 의미?`
- 2016-01-03 `c6cd2669` [L6348](https://github.com/git/git/blob/master/po/ko.po#L6348) `# FIXME: give twice?`
- 2016-01-03 `c6cd2669` [L7042](https://github.com/git/git/blob/master/po/ko.po#L7042) `# FIXME: 의미 불명`
- 2016-08-21 `ec584cd6` [L17005](https://github.com/git/git/blob/master/po/ko.po#L17005) `"진행 중인 대화형 리베이스의 TODO 파일을 편집하는 중입니다.\n"`

`po/sv.po` (1)

- 2026-06-25 `4de2e01d` [L16614](https://github.com/git/git/blob/master/po/sv.po#L16614) `# TODO: Hitta bättre översättning för "poll"`

`po/vi.po` (1)

- 2024-07-26 `db510450` [L67](https://github.com/git/git/blob/master/po/vi.po#L67)

  ```
  # | (a.) tracked                      | được theo dõi                |
  # | (a.) untracked                    | không được theo dõi          |
  # | (v.) parse                        | hiểu cú pháp                 |
  # | (n.) output                       | đầu ra, kết quả              |
  # | (v.) output                       | in ra, xuất ra               |
  # | (v.) merge                        | hoà trộn                     |
  # | (v.) rebase                       | cải tổ                       |
  # | (v.) squash                       | squash                       |
  # | (v.) amend                        | tu bổ                        |
  # | (n.) revision                     | cải biên                     |
  # | (n.) repo/repository              | kho chứa                     |
  # | (n.) tag                          | thẻ                          |
  # | (v.) tag                          | tạo thẻ                      |
  # | | |
  # | ... TODO ...                      |                              |
  # +------------------------------------------------------------------+
  ```


</details>

<details>
<summary><b>refs</b> &mdash; 5 markers</summary>

`refs/files-backend.c` (1)

- 2024-05-07 `644daf77` [L3164](https://github.com/git/git/blob/master/refs/files-backend.c#L3164)

  ```
  /*
   * TODO: currently we skip creating reflogs for dangling
   * symref updates. It would be nice to capture this as
   * zero oid updates however.
   */
  ```


`refs/reftable-backend.c` (4)

- 2025-04-08 `ca89c18d` [L1359](https://github.com/git/git/blob/master/refs/reftable-backend.c#L1359)

  ```
  /*
   * TODO: it's dubious whether we should reload the stack that "HEAD"
   * belongs to or not. In theory, it may happen that we only modify
   * stacks which are _not_ part of the "HEAD" stack. In that case we
   * wouldn't have prepared any transaction for its stack and would not
   * have reloaded it, which may mean that it is stale.
   *
   * On the other hand, reloading that stack without locking it feels
   * wrong, too, as the value of "HEAD" could be modified concurrently at
   * any point in time.
   */
  ```

- 2024-05-07 `644daf77` [L1564](https://github.com/git/git/blob/master/refs/reftable-backend.c#L1564)

  ```
  /*
   * TODO: currently we skip creating reflogs for dangling
   * symref updates. It would be nice to capture this as
   * zero oid updates however.
   */
  ```

- 2024-11-26 `46b5f670` [L2213](https://github.com/git/git/blob/master/refs/reftable-backend.c#L2213)

  ```
  /*
   * TODO: we should adapt this callsite to reload the stack. There is no
   * obvious reason why we shouldn't.
   */
  ```

- 2024-11-26 `46b5f670` [L2264](https://github.com/git/git/blob/master/refs/reftable-backend.c#L2264)

  ```
  /*
   * TODO: we should adapt this callsite to reload the stack. There is no
   * obvious reason why we shouldn't.
   */
  ```


</details>

<details>
<summary><b>t</b> &mdash; 104 markers</summary>

`t/helper/test-chmtime.c` (1)

- 2022-03-25 `369f0f54` [L140](https://github.com/git/git/blob/master/t/helper/test-chmtime.c#L140)

  ```
  /*
   * NEEDSWORK: The Windows version of `utime()`
   * (aka `mingw_utime()`) does not correctly
   * handle directory arguments, since it uses
   * `_wopen()`.  Ignore it for now since this
   * is just a test.
   */
  ```


`t/helper/test-trace2.c` (1)

- 2019-02-22 `a15860dc` [L174](https://github.com/git/git/blob/master/t/helper/test-trace2.c#L174) `* [] TODO talk about process replacement and how it affects SID.`

`t/helper/test-wildmatch.c` (2)

- 2012-11-20 `ef49841d` [L10](https://github.com/git/git/blob/master/t/helper/test-wildmatch.c#L10) `"pattern because Windows does not like it. Use 'XXX/' instead.");`
- 2012-11-20 `ef49841d` [L11](https://github.com/git/git/blob/master/t/helper/test-wildmatch.c#L11) `else if (!strncmp(argv[i], "XXX/", 4))`

`t/lib-gpg.sh` (1)

- 2025-10-13 `e204a167` [L77](https://github.com/git/git/blob/master/t/lib-gpg.sh#L77)

  ```
  # NEEDSWORK: prepare_gnupghome() should definitely be
  # called here, but it looks like it exposes a
  # pre-existing, hidden bug by allowing some tests in
  # t1016-compatObjectFormat.sh to run instead of being
  # skipped. See:
  # https://lore.kernel.org/git/ZoV8b2RvYxLOotSJ@teonanacatl.net/
  ```


`t/perf/p7527-builtin-fsmonitor.sh` (2)

- 2022-05-26 `7667f9d2` [L23](https://github.com/git/git/blob/master/t/perf/p7527-builtin-fsmonitor.sh#L23)

  ```
  # Lie to perf-lib and ask for a new empty repo and avoid
  # the complaints about GIT_PERF_REPO not being big enough
  # the perf hit when GIT_PERF_LARGE_REPO is copied into
  # the trash directory.
  #
  # NEEDSWORK: It would be nice if perf-lib had an option to
  # "borrow" an existing large repo (especially for gigantic
  # monorepos) and use it in-place.  For now, fake it here.
  #
  ```

- 2022-05-26 `7667f9d2` [L112](https://github.com/git/git/blob/master/t/perf/p7527-builtin-fsmonitor.sh#L112)

  ```
  # NEEDSWORK: We assume that $GIT_PERF_REPEAT_COUNT > 1.  With
  # FSMonitor enabled, we can get a skewed view of status times, since
  # the index MAY (or may not) be updated after the first invocation
  # which will update the FSMonitor Token, so the subsequent invocations
  # may get a smaller response from the daemon.
  #
  ```


`t/t0000-basic.sh` (18)

- 2021-09-22 `c3ff7be6` [L117](https://github.com/git/git/blob/master/t/t0000-basic.sh#L117) `test_expect_success 'subtest: a failing TODO test' '`
- 2012-12-16 `5ebf89e8` [L125](https://github.com/git/git/blob/master/t/t0000-basic.sh#L125) `> not ok 2 - pretend we have a known breakage # TODO known breakage`
- 2021-09-22 `c3ff7be6` [L132](https://github.com/git/git/blob/master/t/t0000-basic.sh#L132) `test_expect_success 'subtest: a passing TODO test' '`
- 2012-12-16 `b73d9a23` [L138](https://github.com/git/git/blob/master/t/t0000-basic.sh#L138) `> ok 1 - pretend we have fixed a known breakage # TODO known breakage `
- 2021-09-22 `c3ff7be6` [L144](https://github.com/git/git/blob/master/t/t0000-basic.sh#L144) `test_expect_success 'subtest: 2 TODO tests, one passin' '`
- 2012-12-16 `b73d9a23` [L152](https://github.com/git/git/blob/master/t/t0000-basic.sh#L152) `> not ok 1 - pretend we have a known breakage # TODO known breakage`
- 2012-12-16 `b73d9a23` [L154](https://github.com/git/git/blob/master/t/t0000-basic.sh#L154) `> ok 3 - pretend we have fixed another known breakage # TODO known bre`
- 2021-09-22 `c3ff7be6` [L162](https://github.com/git/git/blob/master/t/t0000-basic.sh#L162) `test_expect_success 'subtest: mixed results: pass, failure and a TODO `
- 2012-12-16 `5ebf89e8` [L173](https://github.com/git/git/blob/master/t/t0000-basic.sh#L173) `> not ok 3 - pretend we have a known breakage # TODO known breakage`
- 2012-12-16 `5ebf89e8` [L205](https://github.com/git/git/blob/master/t/t0000-basic.sh#L205) `> not ok 8 - pretend we have a known breakage # TODO known breakage`
- 2012-12-16 `5ebf89e8` [L206](https://github.com/git/git/blob/master/t/t0000-basic.sh#L206) `> not ok 9 - pretend we have a known breakage # TODO known breakage`
- 2012-12-16 `b73d9a23` [L207](https://github.com/git/git/blob/master/t/t0000-basic.sh#L207) `> ok 10 - pretend we have fixed a known breakage # TODO known breakage`
- 2022-07-28 `46fb057a` [L619](https://github.com/git/git/blob/master/t/t0000-basic.sh#L619) `not ok 2 - # TODO induced breakage (--invert-exit-code): failing test `
- 2022-07-28 `46fb057a` [L624](https://github.com/git/git/blob/master/t/t0000-basic.sh#L624) `# faked up failures as TODO & now exiting with 0 due to --invert-exit-`
- 2022-07-28 `46fb057a` [L634](https://github.com/git/git/blob/master/t/t0000-basic.sh#L634) `not ok 2 - # TODO induced breakage (--invert-exit-code): failing test `
- 2022-07-28 `46fb057a` [L637](https://github.com/git/git/blob/master/t/t0000-basic.sh#L637) `# faked up failures as TODO & now exiting with 0 due to --invert-exit-`
- 2022-07-28 `46fb057a` [L648](https://github.com/git/git/blob/master/t/t0000-basic.sh#L648) `not ok 2 - # TODO induced breakage (--invert-exit-code): failing test `
- 2022-07-28 `46fb057a` [L651](https://github.com/git/git/blob/master/t/t0000-basic.sh#L651) `# faked up failures as TODO & now exiting with 0 due to --invert-exit-`

`t/t0027-auto-crlf.sh` (2)

- 2016-04-25 `67e9bff0` [L582](https://github.com/git/git/blob/master/t/t0027-auto-crlf.sh#L582) `# currently the same as text, eol=XXX`
- 2016-04-25 `67e9bff0` [L597](https://github.com/git/git/blob/master/t/t0027-auto-crlf.sh#L597) `# text=auto + eol=XXX`

`t/t0080-unit-test-output.sh` (2)

- 2023-11-09 `e137fe3b` [L17](https://github.com/git/git/blob/master/t/t0080-unit-test-output.sh#L17) `not ok 5 - passing TEST_TODO() # TODO`
- 2024-07-30 `96c6304c` [L63](https://github.com/git/git/blob/master/t/t0080-unit-test-output.sh#L63) `not ok 22 - if_test passing TEST_TODO() # TODO`

`t/t0200-gettext-basic.sh` (1)

- 2011-11-18 `5e9637c6` [L42](https://github.com/git/git/blob/master/t/t0200-gettext-basic.sh#L42)

  ```
  # TODO: When we have more locales, generalize this to test them
  # all. Maybe we'll need a dir->locale map for that.
  ```


`t/t0212/parse_events.perl` (3)

- 2019-02-22 `a15860dc` [L171](https://github.com/git/git/blob/master/t/t0212/parse_events.perl#L171) `# TODO decide what information we want to test from thread events.`
- 2019-02-22 `a15860dc` [L183](https://github.com/git/git/blob/master/t/t0212/parse_events.perl#L183) `# TODO decide what information we want to test from exec events.`
- 2022-07-18 `3a251bac` [L225](https://github.com/git/git/blob/master/t/t0212/parse_events.perl#L225)

  ```
  # NEEDSWORK: Ignore due to
  # compat/win32/trace2_win32_process_info.c, which should log a
  # "cmd_ancestry" event instead.
  ```


`t/t0450-txt-doc-vs-help.sh` (1)

- 2022-10-13 `c39fffc1` [L166](https://github.com/git/git/blob/master/t/t0450-txt-doc-vs-help.sh#L166) `echo "=== TODO: $builtin ===" &&`

`t/t1006-cat-file.sh` (2)

- 2025-06-02 `9fd38038` [L186](https://github.com/git/git/blob/master/t/t1006-cat-file.sh#L186)

  ```
  # FIXME: %(rest) is incompatible with object names that include whitespace,
  # e.g. HEAD:path/to/a/file with spaces. Use the resolved OID as input to
  # test this instead of the raw object name.
  ```

- 2025-06-02 `b0b910e0` [L1248](https://github.com/git/git/blob/master/t/t1006-cat-file.sh#L1248)

  ```
  # FIXME: this call to mktree is incompatible with compatObjectFormat
  # because the submodule OID cannot be mapped to the compat hash algo.
  ```


`t/t1091-sparse-checkout-builtin.sh` (1)

- 2021-09-24 `49fdd51a` [L503](https://github.com/git/git/blob/master/t/t1091-sparse-checkout-builtin.sh#L503)

  ```
  # NEEDSWORK: We are asking to update a file outside of the
  # sparse-checkout cone, but this is no longer allowed.
  ```


`t/t1092-sparse-checkout-compatibility.sh` (10)

- 2021-07-20 `70569fad` [L613](https://github.com/git/git/blob/master/t/t1092-sparse-checkout-compatibility.sh#L613)

  ```
  # NEEDSWORK: sparse-checkout behaves differently from full-checkout when
  # running this test with 'df-conflict-2' after 'df-conflict-1'.
  ```

- 2022-01-11 `e015d4d9` [L879](https://github.com/git/git/blob/master/t/t1092-sparse-checkout-compatibility.sh#L879)

  ```
  # NEEDSWORK: `--remove`, unlike the rest of `update-index`, does not ignore
  # `skip-worktree` entries by default and will remove them from the index.
  # The `--ignore-skip-worktree-entries` flag must be used in conjunction with
  # `--remove` to ignore the `skip-worktree` entries and prevent their removal
  # from the index.
  ```

- 2021-09-24 `105e8b01` [L1154](https://github.com/git/git/blob/master/t/t1092-sparse-checkout-compatibility.sh#L1154)

  ```
  # 2. Add the file with conflict markers
  # NEEDSWORK: Even though the merge conflict removed the
  # SKIP_WORKTREE bit from the index entry for folder1/a, we should
  # warn that this is a problematic add.
  ```

- 2021-09-24 `105e8b01` [L1165](https://github.com/git/git/blob/master/t/t1092-sparse-checkout-compatibility.sh#L1165)

  ```
  # 3. Rename the file to another sparse filename and
  #    accept conflict markers as resolved content.
  # NEEDSWORK: This mode now fails, because folder2/z is
  # outside of the sparse-checkout cone and does not match an
  # existing index entry with the SKIP_WORKTREE bit cleared.
  ```

- 2021-07-14 `e5ca2910` [L1967](https://github.com/git/git/blob/master/t/t1092-sparse-checkout-compatibility.sh#L1967)

  ```
  # NEEDSWORK: a sparse-checkout behaves differently from a full checkout
  # in this scenario, but it shouldn't.
  ```

- 2021-07-20 `70569fad` [L2002](https://github.com/git/git/blob/master/t/t1092-sparse-checkout-compatibility.sh#L2002)

  ```
  # NEEDSWORK: 'git checkout' behaves incorrectly in the case of
  # directory/file conflicts, even without sparse-checkout. Use this
  # test only as a documentation of the incorrect behavior, not a
  # measure of how it _should_ behave.
  ```

- 2021-07-20 `70569fad` [L2055](https://github.com/git/git/blob/master/t/t1092-sparse-checkout-compatibility.sh#L2055)

  ```
  # NEEDSWORK: 'git checkout' behaves incorrectly in the case of
  # directory/file conflicts, even without sparse-checkout. Use this
  # test only as a documentation of the incorrect behavior, not a
  # measure of how it _should_ behave.
  ```

- 2022-09-22 `7cae7627` [L2258](https://github.com/git/git/blob/master/t/t1092-sparse-checkout-compatibility.sh#L2258)

  ```
  	ensure_not_expanded grep --cached a -- "deep/*"
  '
  
  # NEEDSWORK: when running `grep` in the superproject with --recurse-submodules,
  # Git expands the index of the submodules unexpectedly. Even though `grep`
  # builtin is marked as "command_requires_full_index = 0", this config is only
  # useful for the superproject. Namely, the submodules have their own configs,
  # which are _not_ populated by the one-time sparse-index feature switch.
  test_expect_failure 'grep within submodules is not expanded' '
  	init_repos_as_submodules &&
  
  	# do not use ensure_not_expanded() here, because `grep` should be
  	# run in the superproject, not in "./sparse-index"
  	GIT_TRACE2_EVENT="$(pwd)/trace2.txt" \
  	git grep --cached --recurse-submodules a -- "*/folder1/*" &&
  ```

- 2022-09-22 `7cae7627` [L2273](https://github.com/git/git/blob/master/t/t1092-sparse-checkout-compatibility.sh#L2273)

  ```
  # NEEDSWORK: this test is not actually testing the code. The design purpose
  # of this test is to verify the grep result when the submodules are using a
  # sparse-index. Namely, we want "folder1/" as a tree (a sparse directory); but
  # because of the index expansion, we are now grepping the "folder1/a" blob.
  # Because of the problem stated above 'grep within submodules is not expanded',
  # we don't have the ideal test environment yet.
  ```

- 2023-08-11 `4723ae10` [L2490](https://github.com/git/git/blob/master/t/t1092-sparse-checkout-compatibility.sh#L2490)

  ```
  # NEEDSWORK: The 'diff --check' test is left as 'test_expect_failure' due
  # to an underlying issue in oneway_diff() within diff-lib.c.
  # 'do_oneway_diff()' is not called as expected for paths that could match
  # inside of a sparse directory. Specifically, the 'ce_path_match()' function
  # fails to recognize files inside a sparse directory (e.g., when 'folder1/'
  # is a sparse directory, 'folder1/a' cannot be recognized). The goal is to
  # proceed with 'do_oneway_diff()' if the pathspec could match inside of a
  # sparse directory.
  ```


`t/t1700-split-index.sh` (1)

- 2018-11-19 `d8465500` [L48](https://github.com/git/git/blob/master/t/t1700-split-index.sh#L48) `# NEEDSWORK: Stop hard-coding checksums.`

`t/t1800-hook.sh` (1)

- 2023-06-10 `6b6fe8b4` [L569](https://github.com/git/git/blob/master/t/t1800-hook.sh#L569)

  ```
  # TODO: We should emit the same (or at least a more similar)
  # error on MINGW (essentially Git for Windows) and all other
  # platforms.. See the OS-specific code in start_command()
  ```


`t/t3070-wildmatch.sh` (5)

- 2018-01-30 `91061c44` [L278](https://github.com/git/git/blob/master/t/t3070-wildmatch.sh#L278) `match 1 1 1 1 'XXX/foo' '**/foo'`
- 2018-01-30 `91061c44` [L300](https://github.com/git/git/blob/master/t/t3070-wildmatch.sh#L300)

  ```
  match 1 1 1 1 'deep/foo/bar/baz/x' '**/bar/*/*'
  
  # Various additional tests
  match 0 0 0 0 'acrt' 'a[c-c]st'
  match 1 1 1 1 'acrt' 'a[c-c]rt'
  match 0 0 0 0 ']' '[!]-]'
  match 1 1 1 1 'a' '[!]-]'
  match 0 0 0 0 '' '\'
  match 0 0 0 0 \
        1 1 1 1 '\' '\'
  match 0 0 0 0 'XXX/\' '*/\'
  ```

- 2018-01-30 `91061c44` [L301](https://github.com/git/git/blob/master/t/t3070-wildmatch.sh#L301) `match 1 1 1 1 'XXX/\' '*/\\'`
- 2018-01-30 `91061c44` [L394](https://github.com/git/git/blob/master/t/t3070-wildmatch.sh#L394) `match 1 1 1 1 'XXX/adobe/courier/bold/o/normal//12/120/75/75/m/70/iso8`
- 2018-01-30 `91061c44` [L395](https://github.com/git/git/blob/master/t/t3070-wildmatch.sh#L395) `match 0 0 0 0 'XXX/adobe/courier/bold/o/normal//12/120/75/75/X/70/iso8`

`t/t3430-rebase-merges.sh` (4)

- 2018-04-25 `8f6aed71` [L35](https://github.com/git/git/blob/master/t/t3430-rebase-merges.sh#L35) `mv "$1" "$(git rev-parse --git-path ORIGINAL-TODO)"`
- 2018-04-25 `8f6aed71` [L135](https://github.com/git/git/blob/master/t/t3430-rebase-merges.sh#L135) `grep -v "^#" <.git/ORIGINAL-TODO >output &&`
- 2026-07-06 `47f79f61` [L484](https://github.com/git/git/blob/master/t/t3430-rebase-merges.sh#L484) `test_grep "^label $third-" .git/ORIGINAL-TODO &&`
- 2026-07-06 `47f79f61` [L485](https://github.com/git/git/blob/master/t/t3430-rebase-merges.sh#L485) `test_grep ! "^label $third$" .git/ORIGINAL-TODO`

`t/t4107-apply-ignore-whitespace.sh` (1)

- 2009-08-04 `86c91f91` [L66](https://github.com/git/git/blob/master/t/t4107-apply-ignore-whitespace.sh#L66)

  ```
  # This patch will fail even if whitespace differences are being ignored,
  # because of the missing string at EOL. TODO: this testcase should be
  # improved by creating a line that has the same hash with and without
  # the final string.
  ```


`t/t4205-log-pretty-formats.sh` (1)

- 2021-04-25 `3593ebd3` [L541](https://github.com/git/git/blob/master/t/t4205-log-pretty-formats.sh#L541) `# --date=[XXX] and corresponding %a[X] %c[X] format equivalency`

`t/t5300-pack-object.sh` (1)

- 2025-01-27 `fc62e033` [L715](https://github.com/git/git/blob/master/t/t5300-pack-object.sh#L715)

  ```
  # The following test is not necessarily a permanent choice, but since we do not
  # have a "name hash version" bit in the .bitmap file format, we cannot write the
  # hash values into the .bitmap file without risking breakage later.
  #
  # TODO: Make these compatible in the future and replace this test with the
  # expected behavior when both are specified.
  ```


`t/t5515-fetch-merge-logic.sh` (1)

- 2019-02-25 `d790ee17` [L9](https://github.com/git/git/blob/master/t/t5515-fetch-merge-logic.sh#L9)

  ```
  # NEEDSWORK: If the overspecification of the expected result is reduced, we
  # might be able to run this test in all protocol versions.
  ```


`t/t5539-fetch-http-shallow.sh` (1)

- 2019-02-25 `d790ee17` [L75](https://github.com/git/git/blob/master/t/t5539-fetch-http-shallow.sh#L75)

  ```
  # NEEDSWORK: If the overspecification of the expected result is reduced, we
  # might be able to run this test in all protocol versions.
  ```


`t/t5550-http-fetch-dumb.sh` (1)

- 2020-04-18 `e7fab62b` [L646](https://github.com/git/git/blob/master/t/t5550-http-fetch-dumb.sh#L646)

  ```
  # NEEDSWORK: Writing commands to git-remote-curl can race against the latter
  # erroring out, producing SIGPIPE. Remove "ok=sigpipe" once transport-helper has
  # learned to handle early remote helper failures more cleanly.
  ```


`t/t5551-http-fetch-smart.sh` (1)

- 2019-03-22 `3a9e1ad7` [L239](https://github.com/git/git/blob/master/t/t5551-http-fetch-smart.sh#L239)

  ```
  # NEEDSWORK: When using HTTP(S), protocol v0 supports a "half-auth"
  # configuration with authentication required only when downloading
  # objects and not refs, by having the HTTP server only require
  # authentication for the "git-upload-pack" path and not "info/refs".
  # This is not possible with protocol v2, since both objects and refs
  # are obtained from the "git-upload-pack" path. A solution to this is
  # to teach the server and client to be able to inline ls-refs requests
  # as an Extra Parameter (see "git help gitformat-pack-protocol"), so that
  # "info/refs" can serve refs, just like it does in protocol v0.
  ```


`t/t5552-skipping-fetch-negotiator.sh` (1)

- 2019-12-26 `d6509da6` [L194](https://github.com/git/git/blob/master/t/t5552-skipping-fetch-negotiator.sh#L194)

  ```
  # NEEDSWORK: The number of "have"s sent depends on whether the transport
  # is stateful. If the overspecification of the result were reduced, this
  # test could be used for both stateful and stateless transports.
  ```


`t/t5616-partial-clone.sh` (1)

- 2019-11-05 `6462d5eb` [L531](https://github.com/git/git/blob/master/t/t5616-partial-clone.sh#L531)

  ```
  # NEEDSWORK: The tests beginning with "fetch lazy-fetches" below only
  # test that "fetch" avoid fetching trees and blobs, but not commits or
  # tags. Revisit this if Git is ever taught to support partial clones
  # with commits and/or tags filtered out.
  ```


`t/t5750-bundle-uri-parse.sh` (1)

- 2022-12-22 `ebc39479` [L75](https://github.com/git/git/blob/master/t/t5750-bundle-uri-parse.sh#L75)

  ```
  # TODO: We would prefer if parsing a bundle list would not cause
  # a die() and instead would give a warning and allow the rest of
  # a Git command to continue. This test_must_fail is necessary for
  # now until the interface for relative_url() allows for reporting
  # an error instead of die()ing.
  ```


`t/t6020-bundle-misc.sh` (1)

- 2022-03-09 `86fdd94d` [L606](https://github.com/git/git/blob/master/t/t6020-bundle-misc.sh#L606)

  ```
  # NEEDSWORK: 'git clone --bare' should be able to clone from a filtered
  # bundle, but that requires a change to promisor/filter config options.
  # For now, we fail gracefully with a helpful error. This behavior can be
  # changed in the future to succeed as much as possible.
  ```


`t/t6102-rev-list-unexpected-objects.sh` (1)

- 2022-07-28 `96ecf699` [L25](https://github.com/git/git/blob/master/t/t6102-rev-list-unexpected-objects.sh#L25) `test_expect_success 'TODO (should fail!): traverse unexpected non-blob`

`t/t6404-recursive-merge.sh` (1)

- 2024-10-24 `f56f9d6c` [L90](https://github.com/git/git/blob/master/t/t6404-recursive-merge.sh#L90) `# TODO: fragile test, relies on ambiguous merge-base resolution`

`t/t7012-skip-worktree-writing.sh` (6)

- 2010-04-19 `3d816767` [L191](https://github.com/git/git/blob/master/t/t7012-skip-worktree-writing.sh#L191) `#TODO test_expect_failure 'git-apply adds file' false`
- 2010-04-19 `3d816767` [L192](https://github.com/git/git/blob/master/t/t7012-skip-worktree-writing.sh#L192) `#TODO test_expect_failure 'git-apply updates file' false`
- 2010-04-19 `3d816767` [L193](https://github.com/git/git/blob/master/t/t7012-skip-worktree-writing.sh#L193) `#TODO test_expect_failure 'git-apply removes file' false`
- 2010-04-19 `3d816767` [L194](https://github.com/git/git/blob/master/t/t7012-skip-worktree-writing.sh#L194) `#TODO test_expect_failure 'git-mv to skip-worktree' false`
- 2010-04-19 `3d816767` [L195](https://github.com/git/git/blob/master/t/t7012-skip-worktree-writing.sh#L195) `#TODO test_expect_failure 'git-mv from skip-worktree' false`
- 2010-04-19 `3d816767` [L196](https://github.com/git/git/blob/master/t/t7012-skip-worktree-writing.sh#L196) `#TODO test_expect_failure 'git-checkout' false`

`t/t7401-submodule-summary.sh` (1)

- 2020-08-21 `2a0d1a5c` [L16](https://github.com/git/git/blob/master/t/t7401-submodule-summary.sh#L16)

  ```
  # NOTE: This test script uses 'git add' instead of 'git submodule add' to add
  # submodules to the superproject. Some submodule subcommands such as init and
  # deinit might not work as expected in this script. t7421 does not have this
  # caveat.
  #
  # NEEDSWORK: This test script is old fashioned and may need a big cleanup due to
  # various reasons, one of them being that there are lots of commands taking place
  # outside of 'test_expect_success' block, which is no longer in good-style.
  ```


`t/t7406-submodule-update.sh` (3)

- 2018-08-08 `65799fbc` [L992](https://github.com/git/git/blob/master/t/t7406-submodule-update.sh#L992) `sed "s/$H/XXX/" out >expect &&`
- 2018-08-08 `65799fbc` [L1002](https://github.com/git/git/blob/master/t/t7406-submodule-update.sh#L1002) `sed "s/$H2/XXX/" out >actual &&`
- 2022-06-30 `8fc36c39` [L1152](https://github.com/git/git/blob/master/t/t7406-submodule-update.sh#L1152)

  ```
  # NEEDSWORK: Clean up the tests so that we can reuse the test setup.
  # Don't reuse the existing repos because the earlier tests have
  # intentionally disruptive configurations.
  ```


`t/t7501-commit-basic-functionality.sh` (1)

- 2024-01-17 `cab11f4e` [L6](https://github.com/git/git/blob/master/t/t7501-commit-basic-functionality.sh#L6) `# FIXME: Test the various index usages, test reflog`

`t/t7510-signed-commit.sh` (1)

- 2021-09-10 `1bfb57f6` [L369](https://github.com/git/git/blob/master/t/t7510-signed-commit.sh#L369)

  ```
  # NEEDSWORK: This test relies on the test_tick commit/author dates from the first
  # 'create signed commits' test even though it creates its own
  ```


`t/t7527-builtin-fsmonitor.sh` (1)

- 2022-03-25 `a00cdff8` [L671](https://github.com/git/git/blob/master/t/t7527-builtin-fsmonitor.sh#L671)

  ```
  # NEEDSWORK: Repeat one of the "edit" tests on wt-secondary and
  # confirm that we get the same events and behavior -- that is, that
  # fsmonitor--daemon correctly watches BOTH the working directory and
  # the external GITDIR directory and behaves the same as when ".git"
  # is a directory inside the working directory.
  ```


`t/t7528-signed-commit-ssh.sh` (3)

- 2021-09-10 `3326a783` [L401](https://github.com/git/git/blob/master/t/t7528-signed-commit-ssh.sh#L401) `test_expect_failure GPGSSH 'detect fudged commit with double signature`
- 2021-09-10 `3326a783` [L417](https://github.com/git/git/blob/master/t/t7528-signed-commit-ssh.sh#L417) `test_expect_failure GPGSSH 'show double signature with custom format (`
- 2021-09-10 `3326a783` [L430](https://github.com/git/git/blob/master/t/t7528-signed-commit-ssh.sh#L430) `test_expect_failure GPGSSH 'verify-commit verifies multiply signed com`

`t/t9350-fast-export.sh` (1)

- 2009-03-23 `41a5c70f` [L725](https://github.com/git/git/blob/master/t/t9350-fast-export.sh#L725)

  ```
  # NEEDSWORK: not just check return status, but validate the output
  # Note that these tests DO NOTHING other than print a warning that
  # they are omitting the one tag we asked them to export (because the
  # tags resolve to a tree).  They exist just to make sure we do not
  # abort but instead just warn.
  ```


`t/t9400-git-cvsserver-server.sh` (2)

- 2007-05-02 `b3b53439` [L341](https://github.com/git/git/blob/master/t/t9400-git-cvsserver-server.sh#L341) `#TODO: cvsserver doesn't support update w/o -d`
- 2008-02-01 `41ac414e` [L342](https://github.com/git/git/blob/master/t/t9400-git-cvsserver-server.sh#L342) `test_expect_failure "cvs update w/o -d doesn't create subdir (TODO)" '`

`t/t9402-git-cvsserver-refs.sh` (2)

- 2012-10-13 `aa7aab3b` [L510](https://github.com/git/git/blob/master/t/t9402-git-cvsserver-refs.sh#L510)

  ```
  # This test would fail if cvsserver properly created a ".#afile"* file
  # for the merge.
  # TODO: Validate that the .# file was saved properly, and then
  #   delete/ignore it when checking the tree.
  ```

- 2012-10-13 `aa7aab3b` [L532](https://github.com/git/git/blob/master/t/t9402-git-cvsserver-refs.sh#L532) `# TODO: test cvs status`

`t/t9806-git-p4-options.sh` (1)

- 2011-12-24 `09fca77b` [L212](https://github.com/git/git/blob/master/t/t9806-git-p4-options.sh#L212)

  ```
  # clone --use-client-spec must still specify a depot path
  # if given, it should rearrange files according to client spec
  # when it has view lines that match the depot path
  # XXX: should clone/sync just use the client spec exactly, rather
  # than needing depot paths?
  ```


`t/t9902-completion.sh` (4)

- 2013-04-27 `ddf07bdd` [L2814](https://github.com/git/git/blob/master/t/t9902-completion.sh#L2814) `: TODO .gitignore should not be here &&`
- 2013-04-27 `ddf07bdd` [L2822](https://github.com/git/git/blob/master/t/t9902-completion.sh#L2822) `: TODO .gitignore should not be here &&`
- 2013-04-27 `ddf07bdd` [L2835](https://github.com/git/git/blob/master/t/t9902-completion.sh#L2835) `: TODO .gitignore should not be here &&`
- 2013-04-27 `ddf07bdd` [L2846](https://github.com/git/git/blob/master/t/t9902-completion.sh#L2846) `: TODO .gitignore should not be here &&`

`t/test-lib.sh` (5)

- 2022-07-28 `46fb057a` [L811](https://github.com/git/git/blob/master/t/test-lib.sh#L811) `say_color warn "# faked up failures as TODO & now exiting with 0 due t`
- 2022-07-28 `46fb057a` [L820](https://github.com/git/git/blob/master/t/test-lib.sh#L820) `pfx="# TODO induced breakage (--invert-exit-code):"`
- 2022-07-28 `6d00680d` [L843](https://github.com/git/git/blob/master/t/test-lib.sh#L843) `say_color error "ok $test_count - $1 # TODO known breakage vanished"`
- 2022-07-28 `6d00680d` [L849](https://github.com/git/git/blob/master/t/test-lib.sh#L849) `say_color warn "not ok $test_count - $1 # TODO known breakage"`
- 2026-02-20 `68ac70b6` [L1783](https://github.com/git/git/blob/master/t/test-lib.sh#L1783)

  ```
  # We require Git to be built with iconv support, and we require the
  # iconv binary to exist.
  #
  # NEEDSWORK: We might eventually want to split this up into two
  # prerequisites: one for NO_ICONV, and one for the iconv(1) binary, as
  # some tests only depend on either of these.
  ```


`t/unit-tests/test-lib.c` (2)

- 2023-11-09 `e137fe3b` [L106](https://github.com/git/git/blob/master/t/unit-tests/test-lib.c#L106) `vprintf(format, ap); /* TODO: handle newlines */`
- 2023-11-09 `e137fe3b` [L244](https://github.com/git/git/blob/master/t/unit-tests/test-lib.c#L244) `printf(" # TODO");`

</details>

<details>
<summary><b>templates</b> &mdash; 4 markers</summary>

`templates/hooks/sendemail-validate.sample` (4)

- 2023-04-14 `3c8d3ade` [L22](https://github.com/git/git/blob/master/templates/hooks/sendemail-validate.sample#L22)

  ```
  #
  # To enable this hook, rename this file to "sendemail-validate".
  #
  # By default, it will only check that the patch(es) can be applied on top of
  # the default upstream branch without conflicts in a secondary worktree. After
  # validation (successful or not) of the last patch of a series, the worktree
  # will be deleted.
  #
  # The following config variables can be set to change the default remote and
  # remote ref that are used to apply the patches against:
  #
  #   sendemail.validateRemote (default: origin)
  #   sendemail.validateRemoteRef (default: HEAD)
  #
  # Replace the TODO placeholders with appropriate checks according to your
  # needs.
  ```

- 2023-04-14 `3c8d3ade` [L27](https://github.com/git/git/blob/master/templates/hooks/sendemail-validate.sample#L27) `# TODO: Replace with appropriate checks (e.g. spell checking).`
- 2023-04-14 `3c8d3ade` [L35](https://github.com/git/git/blob/master/templates/hooks/sendemail-validate.sample#L35)

  ```
  # TODO: Replace with appropriate checks for this patch
  # (e.g. checkpatch.pl).
  ```

- 2023-04-14 `3c8d3ade` [L41](https://github.com/git/git/blob/master/templates/hooks/sendemail-validate.sample#L41)

  ```
  # TODO: Replace with appropriate checks for the whole series
  # (e.g. quick build, coding style checks, etc.).
  ```


</details>

<details>
<summary><b>tools</b> &mdash; 3 markers</summary>

`tools/check-builtins.sh` (2)

- 2015-02-05 `8c1e9f40` [L6](https://github.com/git/git/blob/master/tools/check-builtins.sh#L6) `$(foreach b,$(BUILT_INS),echo XXX $(b:$X=) YYY;)`
- 2006-11-05 `c74390e4` [L11](https://github.com/git/git/blob/master/tools/check-builtins.sh#L11) `sed -n -e 's/.*XXX \(.*\) YYY.*/\1/p' |`

`tools/coccinelle/the_repository.cocci` (1)

- 2026-01-15 `4eb105c1` [L5](https://github.com/git/git/blob/master/tools/coccinelle/the_repository.cocci#L5)

  ```
  // TODO: remove the rules below and the macros from tree.h after the
  // next Git release.
  ```


</details>

<details>
<summary><b>trace2</b> &mdash; 1 markers</summary>

`trace2/tr2_tgt_normal.c` (1)

- 2019-02-22 `ee4512ed` [L233](https://github.com/git/git/blob/master/trace2/tr2_tgt_normal.c#L233)

  ```
  /*
   * TODO if (cmd->env) { Consider dumping changes to environment. }
   * See trace_add_env() in run-command.c as used by original trace.c
   */
  ```


</details>
