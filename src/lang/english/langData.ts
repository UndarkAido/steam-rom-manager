import { languageContainer } from "../../models";

export const EnglishLang: languageContainer = {
  'English': {
    about: {
      component: {
        info__md: [require('./markdown/about.md')]
      }
    },
    preview: {
      component: {
        filter: 'Filter by title',
        selectType: 'Select type',
        selectCategories: 'Filter by category',
        selectTypeOptions: {
          long: 'Grids',
          tall: 'Posters',
          hero: 'Heroes',
          icon: 'Icons',
          logo: 'Logos',
          games: 'All Artwork'
        },
        by: 'by',
        refreshImages: 'Refresh images',
        saveImage: 'Save image to file',
        addLocalImages: 'Add local images',
        retryDownload: 'Retry download',
        generateAppList: 'Generate app list',
        saveAppList: 'Save app list',
        removeAppList: 'Remove app list',
        remainingImages: 'Remaining providers:',
        stopUrlRetrieving: 'Stop image providers'
      },
      service: {
        info: {
          listIsBeingGenerated: 'List is being generated. Please wait.',
          listIsBeingSaved: 'List is being saved. Please wait.',
          listIsBeingRemoved: 'List is being removed. Please wait.',
          listIsEmpty: 'List is empty.',
          populatingVDF_List: 'Populating VDF list.',
          creatingBackups: 'Creating backups.',
          readingVDF_Files: 'Reading VDF files.',
          mergingVDF_entries: 'Merging VDF entries.',
          removingVDF_entries: 'Removing VDF entries and image files.',
          savingCategories: 'Saving added category information to localconfig.vdf',
          removingFromCategories: 'Removing all added category information',
          writingVDF_entries: 'Writing VDF files and saving/removing images.',
          updatingKnownSteamDirList: 'Updating a list of known Steam directories.',
          retryingDownload__i: 'Retrying image download from "${imageUrl}" for "${appTitle}".',
          disabledConfigurations__i: '${count} user configuration(s) was/were skipped (disabled by user).',
          invalidConfigurations__i: '${count} user configuration(s) was/were skipped (invalid).',
          executingParsers: 'Executing parsers.',
          shutdownSteam: 'Please shutdown Steam if it is running.',
          noParserConfigurations: 'Please create parser configuration in "Parsers" menu first.',
          parserFoundNoFiles: 'Parser(s) found no files matching user configuration.',
          allImagesRetrieved: 'All available image urls retrieved.',
          providerTimeout__i: 'Timeout was requested by "${provider}" for ${time} second(s).',
          noAccountsWarning: 'User accounts not found. Incorrect Steam directory?'
        },
        errors: {
          fatalError: 'Fatal error occurred in Preview. See event log for details.',
          fatalError__i: 'Fatal Preview Error ${error}',
          knownSteamDirListIsEmpty: 'A list of known Steam directories is empty.',
          steamIsRunning: 'Cannot make changes while steam is running!',
          categorySaveError: 'Error updating categories. See event log for details.',
          categorySaveError__i: 'Category error (shortcuts and artwork will still be added): ${error}',
          retryingDownload__i: 'Image download from "${imageUrl}" failed for "${appTitle}".',
          providerError__i: 'Error received from "${provider}" for "${title}":\n (${url ? `${code}: ${url}` : code}).',
          unknownProviderError__i: 'Error received from "${provider}" for "${title}":\n ${error}'
        },
        success: {
          writingVDF_entries: 'Done adding/removing entries.',
          removingVDF_entries: 'Entries have been removed.',
        }
      }
    },
    steamParser: {
      docs__md: {
        self: [
          require('./markdown/steam-parser.md')
        ]

      },
      errors: {
        directoryInvalid: "> Steam directory invalid.",
        noSteamAccounts: "> Steam directory specified has no accounts.",
        steamChanged__i: '> Steam changed internal database structure or parser tried to read an outdated database.\nProblematic file: ${file}\nFull error:\n ${error}',
        fatalError__i: '> Steam parser failed with fatal error:\n ${error}'
      }
    },
    manualParser: {
        manifestsInputTitle: 'Manifests Directory',

        docs__md: {
            self: [
                require('./markdown/manual-parser.md'),
                require('./markdown/manual-parser-input.md')
            ],
            input: [
                require('./markdown/manual-parser-input.md')
            ]
        },
        errors: {
            fatalError__i: '> Manual parser failed with fatal error:\n ${error}'

        }
    },
    epicParser: {
      manifestsInputTitle: 'Manifests Directory Override',
      launcherModeInputTitle: 'Launch games via Epic for online services',
      docs__md: {
        self: [
          require('./markdown/epic-parser.md'),
          require('./markdown/epic-parser-input.md')
        ],
        input: [
          require('./markdown/epic-parser-input.md')
        ]
      },
      errors: {
        invalidManifestsOverride: "> Manifests Override is not a valid directory.",
        epicNotCompatible: "> Epic Games Store not available on Linux.\n If you are using the Legendary store on Linux you need to set Manifests Override.",
        epicNotInstalled: "> Epic Games does not appear to be installed.",
        fatalError__i: '> Epic Games parser failed with fatal error:\n ${error}'
      }
    },
    uplayParser: {
      uplayDirTitle: 'Uplay Directory Override',
      launcherModeInputTitle: 'Launch games via UPlay for online services',
      docs__md: {
        self: [
          require('./markdown/uplay-parser.md'),
          require('./markdown/uplay-parser-input.md')
        ],
        input: [
          require('./markdown/uplay-parser-input.md')
        ]
      },
      errors: {
        invalidManifestsOverride: "> Uplay Directory Override is not a valid directory.",
        uplayNotCompatible: "> UPlay Parser not available on Linux or Mac.",
        uplayDirNotFound: "> Specified UPlay directory does not exist.",
        uplayNotInstalled: "> UPlay not installed in specified directory.",
        fatalError__i: '> UPlay parser failed with fatal error:\n ${error}'
      }
    },
    gogParser: {
      galaxyExeOverrideTitle: "Galaxy Path Override",
      launcherModeInputTitle: 'Launch games via GOG Galaxy',
      docs__md: {
        self: [
          require('./markdown/gog-parser.md'),
          require('./markdown/gog-parser-input.md')
        ],
        input: [
          require('./markdown/gog-parser-input.md')
        ]
      },
      errors: {
        invalidGalaxyExeOverride: "> Galaxy Client Override is not a valid path.",
        fatalError__i: '> GOG Galaxy parser failed with fatal error:\n ${error}',
        gogNotCompatible: '> GOG Galaxy parser is currently only available on Windows.',
        gogNotInstalled: '> GOG Galaxy does not appear to be installed.'
      }
    },
    amazonGamesParser: {
      exeOverrideTitle: "Amazon Games Path Override",
      launcherModeInputTitle: "Launch games via Amazon Games",
      docs__md: {
        self: [
          require('./markdown/amazon-games-parser.md')
        ],
        input: [
          require('./markdown/amazon-games-parser-input.md')
        ]
      },
      errors: {
        invalidExeOverride: "> Amazon Games Installation Override is not a valid directory.",
        osUnsupported: "> Amazon Games parser failed because Amazon Games is only avaliable on windows.",
        databaseNotFound: "> Amazon Games database file not found. Amazon Games is most likely not installed.",
        fatalError__i: '> Amazon Games parser failed with fatal error:\n ${error}'
      }
    },
    itchIoParser: {
      itchIoAppDataOverrideTitle: "itch.io AppData Path Override",
      docs__md: {
        self: [
          require('./markdown/itch-io-parser.md')
        ],
        input: [
          require('./markdown/itch-io-parser-input.md')
        ]
      },
      errors: {
        invalidItchIoAppDataOverride: "> itch.io AppData Override is not a valid directory.",
        osUnsupported: "> itch.io parser failed because the parser only supports macos, linux, and windows currently.",
        fatalError__i: '> itch.io parser failed with fatal error:\n ${error}',
        databaseNotFound: "> itch.io database file not found. Itch is most likely not installed."
      }
    },
    globParser: {
      inputTitle: 'User\'s glob',
      docs__md: {
        self: [
          require('./markdown/glob-parser.md'),
          require('./markdown/what-is-glob.md'),
          require('./markdown/spec-glob-chars.md'),
        ],
        input: [
          require('./markdown/glob-parser-input.md'),
          require('./markdown/spec-glob-chars.md')
        ]
      },
      errors: {
        noTitle__md: '> File glob must contain `${title}`!',
        moreThanOneTitle__md: '> File glob must contain only one `${title}`!',
        noStarNextToTitle__md: '> Star `*` can not be next to `${title}`!',
        noAnyCharNextToTitle__md: '> Any char `?` can not be next to `${title}`!',
        noWindowsSlash__md: '> Windows directory character `\\` is not allowed! Use `/` instead.',
        noGlobstarOnBothSides__md: '> Globstar `**` can only be on one side of `${title}`!',
        noBracedDirSetOnBothSides__md: '> A braced set, containing at least one slash `/` can only be on one side of `${title}`!',
        noBracedDirSetOrGlobstarOnBothSides__md: '> A braced set, containing at least one slash `/` and a globstar `**` can only be on one side of `${title}`!',
        noEmptyPattern__md: '> Pattern can not be empty!',
        noEmptyCharRange__md: '> Character range can not be empty!',
        noStarInPatternNextToTitle__md: '> Star `*`, inside a pattern, can not be next to `${title}`!',
        noAnyCharInPatternNextToTitle__md: '> Any char `?`, inside a pattern, can not be next to `${title}`!'
      }
    },
    globRegexParser: {
      inputTitle: 'User\'s glob-regex',
      docs__md: {
        self: [
          require('./markdown/glob-regex-parser.md'),
          require('./markdown/what-is-glob.md'),
          require('./markdown/spec-glob-chars.md')
        ],
        input: [
          require('./markdown/glob-regex-parser-input.md'),
          require('./markdown/spec-glob-chars.md')
        ]
      },
      errors: {
        noRegex__md: '> File glob must contain `${regex}` where **regex** is your regular expression!',
        moreThanOneRegex__md: '> File glob must contain only one `${regex}`!',
        noStarNextToRegex__md: '> Star `*` can not be next to `${regex}`!',
        noAnyCharNextToRegex__md: '> Any char `?` can not be next to `${regex}`!',
        noWindowsSlash__md: '> Windows directory character `\\` is not allowed! Use `/` instead.',
        noGlobstarOnBothSides__md: '> Globstar `**` can only be on one side of `${regex}`!',
        noBracedDirSetOnBothSides__md: '> A braced set, containing at least one slash `/` can only be on one side of `${regex}`!',
        noBracedDirSetOrGlobstarOnBothSides__md: '> A braced set, containing at least one slash `/` and a globstar `**` can only be on one side of `${regex}`!',
        noEmptyPattern__md: '> Pattern can not be empty!',
        noEmptyCharRange__md: '> Character range can not be empty!',
        noStarInPatternNextToRegex__md: '> Star `*`, inside a pattern, can not be next to `${regex}`!',
        noAnyCharInPatternNextToRegex__md: '> Any char `?`, inside a pattern, can not be next to `${regex}`!'
      }
    },
    sgdbProvider: {
      nsfwInputTitle: 'Allow NSFW artwork',
      humorInputTitle: 'Allow joke artwork',
      imageMotionTypesTitle: 'Allowed animation types',
      stylesTitle: 'Allowed grid styles',
      stylesHeroTitle: 'Allowed hero styles',
      stylesLogoTitle: 'Allowed logo styles',
      stylesIconTitle: 'Allowed icon styles',
      docs__md: {
        self: [],
        input: [require('./markdown/sgdb-api-input.md')]
      }
    },
    logger: {
      component: {
        noMessages: 'No messages are available',
        error: 'ERROR',
        info: 'INFO',
        success: 'SUCCESS',
        fuzzy: 'FUZZY',
        textWrap: 'TEXT-WRAP',
        autoscroll: 'AUTOSCROLL',
        clearLog: 'Clear log',
        docs__md: {
          self: [require('./markdown/logger.md')]
        }
      }
    },
    customVariables: {
      service: {
        error: {
          failedToDownload__i: 'Failed to download custom variables file. Status: ${error}.',
          writingError: 'Error occurred while saving custom variables.',
          loadingError: 'Error occurred while loading custom variables.',
          corruptedVariables__i: 'Saved custom variables are invalid!\r\nPermanent variable saving is disabled until this issue is resolved.\r\nTry to manually fix errors yourself (file - ${file})\r\nor seek help on github or our official discord channel: ${error}',
        },
        info: {
          downloaded: 'Custom variables file has been downloaded.'
        }
      }
    },
    configPresets: {
      service: {
        error: {
          failedToDownload__i: 'Failed to download configuration presets file. Status: ${error}.',
          writingError: 'Error occurred while saving configuration presets.',
          loadingError: 'Error occurred while loading configuration presets.',
          corruptedVariables__i: 'Saved configuration presets are invalid!\r\nPermanent file saving is disabled until this issue is resolved.\r\nTry to manually fix errors yourself (file - ${file})\r\nor seek help on github or our official discord channel: ${error}',
        },
        info: {
          updatingPresets: 'Local config presets are out of date. Updating now.',
          downloaded: 'New config preset file has been downloaded.'
        }
      }
    },
    settings: {
      component: {
        label: {
          general: 'General settings',
          imageProviders: 'Image provider settings',
          fuzzy: 'Fuzzy matcher settings',
          environmentVariables: 'Environment variable settings',
          communityPresets: 'Community variable/preset settings'
        },
        docs__md: {
          settings: [
            require('./markdown/settings.md'),
            require('./markdown/parser-env-variables.md')
          ]
        },
        text: {
          offlineMode: 'Offline mode',
          removeApps_desc: 'all added app entries',
          removeApps_btn: 'Remove',
          preloadImages: 'Preload retrieved images immediately',
          fuzzy_verbose: 'Log matching results',
          fuzzy_filter: 'Filter images',
          enabledProviders: 'Enabled providers:',
          selectLanguage: 'Select language:',
          resetFuzzy_desc: 'fuzzy list',
          resetFuzzyCache_desc: 'fuzzy cache',
          resetFuzzy_btn: 'Reset',
          customVariables_desc: 'custom variables',
          configPresets_desc: 'config presets',
          showSteamImages: 'Show current Steam images by default',
          deleteDisabledShortcuts: 'Remove shortcuts for disabled parsers',
          clearLogOnTest: 'Automatically clear log before testing parsers'
        },
        placeholder: {
          noProviders: 'None',
          steamDirectoryWin: 'Typically C:\\Program Files (x86)\\Steam',
          steamDirectoryMac: 'Typically ~/Library/Application Support/Steam',
          steamDirectoryLinux: 'Typically ~/.steam/steam',
          romsDirectoryWin: 'For example D:\\ROMs',
          romsDirectoryMac: 'For example ~/ROMs',
          romsDirectoryLinux: 'For example ~/ROMs',
          retroarchPathWin: 'For example C:\\Path\\To\\retroarch.exe',
          retroarchPathLinux: 'For example /path/to/retroarch',
          retroarchPathMac: 'For example /path/to/retroarch',
          raCoresDirectoryWin: 'Typically C:\\Users\\UserName\\AppData\\Roaming\\RetroArch\\cores',
          raCoresDirectoryLinux: 'Typically /lib/x86_64-linux-gnu/libretro/cores',
          raCoresDirectoryMac: 'Typically /Applications/Retroarch.app/Contents/Resources/cores',
          localImagesDirectoryWin: 'For example C:\\Path\\To\\LocalArtwork',
          localImagesDirectoryUnix: 'For example ~/path/to/localartwork'
        }
      },
      service: {
        info: {
          updatingSettings: 'Updating user settings with new fields.'
        },
        error: {
          writingError: 'Error occurred while saving user settings.',
          readingError: 'Error occurred while reading user settings.',
          corruptedSettings__i: 'Saved app settings are invalid!\r\nPermanent settings saving is disabled until this issue is resolved.\r\nTry to manually fix errors yourself (file - ${file})\r\nor seek help on github or our official discord channel: ${error}',
        }
      }
    },
    nav: {
      component: {
        about: 'About',
        preview: 'Preview',
        logger: 'Event log',
        settings: 'Settings',
        parsers: 'Parsers',
        customVariables: 'Variables',
        userExceptions: 'Exceptions',
        noTitle: 'No title!'
      }
    },
    userExceptions:{
      component: {
        buttons: {
          save:'Save',
          deleteAll: 'Clear',
          undoChanges: 'Undo changes',
          addItem: 'Add exception',
          deleteItem: 'Remove exception'
        },
        docs__md: {
          userExceptions: [require('./markdown/user-exceptions.md')]
        },
        text: {
          title: 'User Exceptions',
          exclude: 'Exclude Title'
        }
      },
      service: {
        error: {
          loadingError: 'Could not load user exceptions',
          corruptedExceptions__i: 'User exceptions corrupt (file - ${file}). Saving is disabled, full error is: ${error}',
          writingError: 'Error occurred saving user exceptions'
        }
      }
    },
    parsers: {
      component: {
        buttons: {
          save: 'Save',
          copy: 'Copy',
          testParser: 'Test parser',
          delete: 'Delete',
          moveUp: 'Move up',
          moveDown: 'Move down',
          faq: 'FAQ',
          undoChanges: 'Undo changes',
          undoDelete: 'Undo delete',
          toClipboard: 'Copy configuration to clipboard',
        },
        docs__md: {
          intro: [require('./markdown/intro.md')],
          faq: [require('./markdown/faq.md')],
          communityPresets: [require('./markdown/community-presets.md')],
          parserType: [require('./markdown/empty-parser-type.md')],
          configTitle: [require('./markdown/config-title.md')],
          steamCategory: [
            require('./markdown/steam-category.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md')
          ],
          executableLocation: [require('./markdown/executable-location.md'),require('./markdown/parser-env-variables.md')],
          romDirectory: [require('./markdown/rom-directory.md'),require('./markdown/parser-env-variables.md')],
          steamDirectory: [require('./markdown/steam-directory.md'),require('./markdown/parser-env-variables.md')],
          startInDirectory: [require('./markdown/start-in-directory.md'),require('./markdown/parser-env-variables.md')],
          userAccounts: [require('./markdown/user-accounts.md')],
          titleModifier: [
            require('./markdown/title-modifier.md'),
            require('./markdown/what-is-app-id.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md')
          ],
          executableModifier: [
            require('./markdown/executable-modifier.md'),
            require('./markdown/what-is-app-id.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md')
          ],
          titleFromVariable: [
            require('./markdown/title-from-variable.md')
          ],
          fuzzyMatch: [require('./markdown/fuzzy-matching.md')],
          executableArgs: [
            require('./markdown/executable-arguments.md'),
            require('./markdown/what-is-app-id.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md')
          ],
          onlineImageQueries: [
            require('./markdown/online-image-queries.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md')
          ],
          imageProviders: [
            require('./markdown/image-providers.md'),
            require('./markdown/sgdb-api-input.md')
          ],
          imagePool: [
            require('./markdown/image-pool.md'),
          ],
          defaultImage: [
            require('./markdown/default-image.md'),
            require('./markdown/special-glob-input.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md'),
            require('./markdown/spec-glob-chars.md')
          ],
          defaultTallImage: [
            require('./markdown/default-tall-image.md'),
            require('./markdown/special-glob-input.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md'),
            require('./markdown/spec-glob-chars.md')
          ],
          defaultHeroImage: [
            require('./markdown/default-hero-image.md'),
            require('./markdown/special-glob-input.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md'),
            require('./markdown/spec-glob-chars.md')
          ],
          defaultIcon: [
            require('./markdown/default-icon.md'),
            require('./markdown/special-glob-input.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md'),
            require('./markdown/spec-glob-chars.md')
          ],
          defaultLogoImage: [
            require('./markdown/default-logo-image.md'),
            require('./markdown/special-glob-input.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md'),
            require('./markdown/spec-glob-chars.md')
          ],

          localImages: [
            require('./markdown/local-images.md'),
            require('./markdown/special-glob-input.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md'),
            require('./markdown/spec-glob-chars.md')
          ],
          localTallImages: [
            require('./markdown/local-tall-images.md'),
            require('./markdown/special-glob-input.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md'),
            require('./markdown/spec-glob-chars.md')
          ],
          localHeroImages: [
            require('./markdown/local-hero-images.md'),
            require('./markdown/special-glob-input.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md'),
            require('./markdown/spec-glob-chars.md')
          ],
          localLogoImages: [
            require('./markdown/local-logo-images.md'),
            require('./markdown/special-glob-input.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md'),
            require('./markdown/spec-glob-chars.md')
          ],

          localIcons: [
            require('./markdown/local-icons.md'),
            require('./markdown/special-glob-input.md'),
            require('./markdown/parser-variables.md'),
            require('./markdown/parser-env-variables.md'),
            require('./markdown/spec-glob-chars.md')
          ]
        },
        info: {
          testStarting__i: 'Testing "${title}" parser (SRM version - ${version} ${portable}).',
          opSys__i: 'Operating system is "${os}"',
          testCompleted: 'Parser test is completed.',
          nothingWasFound: 'Parser found nothing.',
          copiedToClipboard: 'Configuration copied to clipboard',
          userExclusions: 'User excluded:',
          excludedFileInfo__i: '[${index}/${total}]: ${filename}'
        },
        error: {
          missingAccounts__i: 'Following ${count} user account(s) were not found (user must to login to Steam at least once):',
          missingAccountInfo__i: '  ${name}',
          noAccountsWarning: 'Warning! No user accounts found, it could be due to one of the reasons below:\r\n - incorrect Steam directory;\r\n - no user has ever logged in;\r\n - Steam does not save user credentials ("Show advanced options -> User accounts -> Use account credentials").\r\nIf you\'re seeing this, preview won\'t be generated for this configuration.',
          failedToMatch: 'Failed to match:',
          failedFileInfo__i: '[${index}/${total}]: ${filename}',
          testFailed: 'Testing failed',
          cannotTestInvalid: 'Can not test invalid configuration!',
          cannotCopyInvalid: 'Can not copy invalid configuration!',
          failedToCopy: 'Failed to copy to clipbard!'
        },
        success: {
          foundAccounts__i: 'Found ${count} available user account(s):',
          foundAccountInfo__i: '  ${name} (steamID64: ${steamID64}, accountID: ${accountID})',
          steamCategory__i: '[${index}/${total}]:     Steam categories - ${steamCategory}',
          steamCategoryInfo__i: '[${index}/${total}]:                        ${steamCategory}',
          extractedTitle__i: '[${index}/${total}]:      Extracted title - ${title}',
          fuzzyTitle__i: '[${index}/${total}]:          Fuzzy title - ${title}',
          finalTitle__i: '[${index}/${total}]:          Final title - ${title}',
          filePath__i: '[${index}/${total}]:            File path - ${filePath}',
          startDir__i: '[${index}/${total}]:            Start dir - ${startDir}',
          completeShortcut__i: '[${index}/${total}]:    Complete shortcut - ${shortcut}',
          firstImageQuery__i: '[${index}/${total}]:        Image queries - ${query}',
          imageQueries__i: '[${index}/${total}]:                        ${query}',
          resolvedDefaultImageGlob__i: '[${index}/${total}]:  Default image glob:',
          resolvedDefaultImageGlobInfo__i: '[${index}/${total}]:                        ${glob}',
          resolvedDefaultTallImageGlob__i: '[${index}/${total}]:  Default tall image glob:',
          resolvedDefaultTallImageGlobInfo__i: '[${index}/${total}]:                        ${glob}',
          resolvedDefaultHeroImageGlob__i: '[${index}/${total}]:  Default hero image glob:',
          resolvedDefaultHeroImageGlobInfo__i: '[${index}/${total}]:                        ${glob}',
          resolvedDefaultLogoImageGlob__i: '[${index}/${total}]:  Default logo image glob:',
          resolvedDefaultLogoImageGlobInfo__i: '[${index}/${total}]:                        ${glob}',
          resolvedDefaultIconGlob__i: '[${index}/${total}]:  Default icon glob:',
          resolvedDefaultIconGlobInfo__i: '[${index}/${total}]:                        ${glob}',
          defaultImageResolved__i: '[${index}/${total}]:       Default image:\r\n[${index}/${total}]:                        ${image}',
          defaultTallImageResolved__i: '[${index}/${total}]:       Default tall image:\r\n[${index}/${total}]:                        ${image}',
          defaultHeroImageResolved__i: '[${index}/${total}]:       Default hero image:\r\n[${index}/${total}]:                        ${image}',
          defaultLogoImageResolved__i: '[${index}/${total}]:       Default logo image:\r\n[${index}/${total}]:                        ${image}',

          defaultIconResolved__i: '[${index}/${total}]:       Default icon:\r\n[${index}/${total}]:                        ${image}',
          resolvedImageGlob__i: '[${index}/${total}]: Resolved image glob:',
          resolvedImageGlobInfo__i: '[${index}/${total}]:                        ${glob}',
          localImagesResolved__i: '[${index}/${total}]:     Resolved images:',
          localImageInfo__i: '[${index}/${total}]:                        ${image}',
          resolvedTallImageGlob__i: '[${index}/${total}]: Resolved tall image glob:',
          resolvedTallImageGlobInfo__i: '[${index}/${total}]:                        ${glob}',
          localTallImagesResolved__i: '[${index}/${total}]:     Resolved tall images:',
          localTallImageInfo__i: '[${index}/${total}]:                        ${image}',
          resolvedHeroImageGlob__i: '[${index}/${total}]: Resolved hero image glob:',
          resolvedHeroImageGlobInfo__i: '[${index}/${total}]:                        ${glob}',
          localHeroImagesResolved__i: '[${index}/${total}]:     Resolved hero images:',
          localHeroImageInfo__i: '[${index}/${total}]:                        ${image}',
          resolvedLogoImageGlob__i: '[${index}/${total}]: Resolved logo image glob:',
          resolvedLogoImageGlobInfo__i: '[${index}/${total}]:                        ${glob}',
          localLogoImagesResolved__i: '[${index}/${total}]:     Resolved logo images:',
          localLogoImageInfo__i: '[${index}/${total}]:                        ${image}',
          resolvedIconGlob__i: '[${index}/${total}]:  Resolved icon glob:',
          resolvedIconGlobInfo__i: '[${index}/${total}]:                        ${glob}',
          localIconsResolved__i: '[${index}/${total}]:      Resolved icons:',
          localIconInfo__i: '[${index}/${total}]:                        ${icon}'
        },
        label: {
          parserType: 'Parser type',
          configTitle: 'Configuration title',
          steamCategory: 'Steam category',
          executableModifier: 'Executable modifier',
          executableLocation: 'Executable',
          romDirectory: 'ROMs directory',
          steamDirectory: 'Steam directory',
          startInDirectory: '"Start In" directory',
          userAccounts: 'User accounts',
          titleFromVariable: 'Title from custom variable',
          titleModifier: 'Title modifier',
          fuzzyMatch: 'Fuzzy matching',
          executableArgs: 'Command line arguments',
          onlineImageQueries: 'Online image query',
          imagePool: 'Image pool',
          imageProviders: 'Image providers',
          defaultImage: 'Default image',
          defaultTallImage: 'Default tall image',
          defaultHeroImage: 'Default hero image',
          defaultLogoImage: 'Default logo image',
          defaultIcon: 'Default icon',
          localImages: 'Local images',
          localTallImages: 'Local tall images',
          localHeroImages: 'Local hero images',
          localLogoImages: 'Local logo images',
          localIcons: 'Local icons'
        },
        placeholder: {
          parserType: 'Select parser...',
          imageProviders: 'None',
          multiAPIPlaceholder: 'No Filter'
        },
        text: {
          skipWithMissingDataDir: 'Skip found accounts with missing data directories',
          useCredentials: 'Use account credentials',
          tryToMatchTitle: 'Enable Title from Custom Variable',
          skipFileIfVariableWasNotFound: 'Skip file if variable was not found',
          caseInsensitiveVariables: 'Case-insensitive variables',
          shortcut_passthrough: 'Follow .lnk or .desktop to destination (Windows and Linux only)',
          fuzzy_use: 'Use fuzzy matching',
          fuzzy_removeCharacters: 'Aggressive matching',
          fuzzy_removeBrackets: 'Remove (...) and [...] brackets',
          fuzzy_replaceDiacritic: 'Replace diacritic characters',
          appendArgsToExecutable: 'Append arguments to executable',
          disabled: 'Disable current parser',
          advanced: 'Show advanced options',
          noTitle: 'No title!'
        }
      },
      service: {
        info: {
          updatingConfigurations: 'Updating user configurations with new fields'
        },
        error: {
          savingConfiguration: 'Error encountered while saving user configurations!',
          readingConfiguration: 'Error encountered while reading user configurations!',
          parserTypeMissing: 'Cannot save without specifying parser type',
          corruptedConfiguration__i: 'One or more saved parser configurations are invalid!\r\nPermanent configuration saving is disabled until this issue is resolved.\r\nTry to manually fix errors yourself (file - ${file})\r\nor seek help on github or our official discord channel: ${error}'
        },
        validationErrors: {
          parserType__md: '> Incorrect parser type!',
          configTitle__md: '> Configuration title is required!',
          parserId__md: '> Parser Id is missing, something is horribly wrong.',
          parserInput: {
            noInput: 'No inputs are available!',
            inputNotAvailable__i: '"${name}" input is not available!',
            incorrectParser: 'Incorrect parser!',
          },
          romDir__md: '> ROMs directory is invalid!',
          userAccounts__md: '> Steam parser requires `User Accounts` field',
          steamDir__md: '> Steam directory is invalid!',
          startInDir__md: '> "Start In" directory is invalid!',
          executable__md: '> Executable is invalid!',
          imagePool__md: '> Image pool must not be empty!',
          defaultImage__md: '> Default image is an invalid path!',
          titleModifier__md: '> Title modifier must not be empty!',
          executableModifier__md: '> Executable modifier must not be empty!',
          variableString__md: '> Uneven number of `${` and `}` pairs. Use `\\` to escape `${` or `}` if you want to use them as characters.',
          imageProviders__md: '> Incorrect image providers type!',
          unhandledValidationKey__md: '> Input\'s validation is unhandled',
          genericDir__md: '> Directory is invalid',
          genericPath__md: '> Path is invalid'
        },
        text: {
          noTitle: 'No title!'
        }
      }
    },
    fuzzyMatcher: {
      info: {
        downloading: 'Title list for fuzzy matching will be downloaded.',
        successfulDownload: 'Download was successful. Saving list.',
        checkingIfListIsUpToDate: 'Checking if title list is up to date.',
        listIsOutdated: 'List is outdated. Title list for fuzzy matching will be downloaded.',
        listIsUpToDate: 'Title list is up to date.',
        match__i: 'Fuzzy title "${fuzzyTitle}" from "${extractedTitle}"',
        equal__i: 'Fuzzy compare: "${a}" == "${b}"',
        notEqual__i: 'Fuzzy compare: "${a}" != "${b}"'
      },
      error: {
        fatalError: 'Fatal error occurred while loading list for Fuzzy matcher. Fuzzy matching will be skipped.',
        totalGamesIsUndefined: 'Failed to get fuzzy list count. "totalGames" key is undefined.'
      }
    },
    fileParser: {
      error: {
        parserNotFound__i: 'Parser "${name}" not found!',
        tooManyFieldGlobs__md: '> Only one `$(...)$` set is allowed per input.',
        parserIsRequired__md: '> First part of `$(...)$` must contain a valid **Glob** ir **Glob-regex** field.',
        noWinSlashes__md: '> Windows directory character `\\` is not allowed! Use `/` instead.'
      }
    },
    imageProvider: {
      error: {
        webWorkerError__i: 'Web worker error has occurred. ${error}',
        unknownWebWorkerError: 'Unknown web worker error has occurred. Error data: ${data}',
      }
    },
    vdfManager: {
      error: {
        noUsersFound: 'None of the provided steam directories contained any user directory.',
        emptyDirectoryList: 'Directory list is empty.',
        couldNotPrepareToRead__i: 'Could not find required steam files:\n ${error}',
        couldNotBackupEntries__i: 'Could not backup required steam files:\n ${error}',
        couldNotReadEntries__i: 'Could not read required steam files:\n ${error}',
        couldNotWriteEntries: 'Could not write entries to steam files:',
        couldNotMergeEntries__i: 'Could not merge entries:\n ${error}',
        couldNotRemoveEntries__i: 'Could not remove entries:\n ${error}'
      }
    },
    vdfFile: {
      error: {
        readingVdf__i: 'Failed to read from "${filePath}". ${error}',
        writingVdf__i: 'Failed to write to "${filePath}". ${error}',
        corruptedVdf__i: '"${filePath}" is corrupted. ${error}',
        creatingBackup__i: 'Could not create backup for "${filePath}". ${error}',
        unsupportedMimeType__i: 'Mime type (${type}) is unsupported (title - "${title}").',
        imageError__i: 'Error occurred while saving/downloading image for "${title}". Url: ${url}. ${error}'
      }
    },
    helpers: {
      error: {
        noUserIdsInDir__i: '"${steamDirectory}" contains no user ids.'
      }
    }
  }
}
