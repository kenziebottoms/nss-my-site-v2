'use strict';

angular.module('io').controller('AchievementCtrl', function($scope) {
  $scope.achievements = [
    {
      title: 'Bulletproof',
      icon: 'security',
      description: 'Write 100% test coverage for a unit of code.',
    },
    {
      title: 'Finders Keepers',
      icon: 'healing',
      description: 'Find a bug by writing automated tests.',
    },
    {
      title: 'Voila',
      icon: 'cast',
      description: 'Demo a feature you built for a client.',
    },
    {
      title: 'It\'s Pronounced "Oiler"',
      icon: 'functions',
      description:
        'Solve 25 problems on <a href="https://projecteuler.net/about" target="blank">Project Euler</a>.',
    },
    {
      title: 'Jam On',
      icon: 'stars',
      description:
        'Score 20 points in <a href="https://en.wikipedia.org/wiki/Roller_derby#Jams" target="blank">one jam</a>.',
    },
    {
      title: '1,667 Words A Day',
      icon: 'chrome_reader_mode',
      description:
        'Beat <a href="https://nanowrimo.org/about" target="blank">NaNoWriMo</a>.',
    },
    {
      title: 'Color Coded',
      icon: 'brush',
      description: 'Write your own color theme for a text editor.',
    },
    {
      title: 'Goodwill Hunting',
      icon: 'toys',
      description:
        'Earn 5000 points in the <a target="blank" href="https://www.gish.com/">Greatest International Scavenger Hunt</a>.',
    },
    {
      title: 'Perfectionist',
      icon: 'access_time',
      description: 'Spend more than 50 hours on a single piece of art.',
    },
    {
      title: 'Hacker Mode',
      icon: 'keyboard',
      description:
        'Write 20 aliases for <a href="https://ohmyz.sh/" target="blank">Zsh</a>.',
    },
    {
      title: 'Mother May I?',
      icon: 'merge_type',
      description: 'Write 50 pull requests.',
    },
    {
      title: 'Buckle Up',
      icon: 'send',
      description: 'Merge 20 branches into master.',
    },
    {
      title: 'Pushover',
      icon: 'assignment_turned_in',
      description: 'Approve 20 pull requests.',
    },
    {
      title: 'Shrug Emoji',
      icon: 'tag_faces',
      description: 'Create 10 slack emojis.',
    },
  ];
});
