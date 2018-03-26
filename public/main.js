angular
  .module("mainGame", [])
  .controller("playerController", ($scope) => {
    $scope.players = [];
    $scope.teams = 2;
    $scope.score = 10;

    class Team {
      constructor(name) {
        this.score = 0;
        this.name = name;
        this.updateScore = (val) => {
          this.score += val;
        }
        this.updateName = (name) => {
          this.name = name;
        }
      }
    }

    $scope.createTeam = (teamName) => {
      let team = new Team(teamName);
      $scope.players.push(team);
    }

    for(let i = 0; i < 2; i++) {
      $scope.createTeam(`team ${i + 1}`);
    }

    console.log($scope.players);
  });

