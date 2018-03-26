angular
  .module("mainGame", [])
  .controller("playerController", ($scope) => {
    $scope.players = [];

    class Game {
      constructor(teamCount) {
        this.teams = [];
        this.quarter = 1;
        this.updateQuarter = () => {
          this.quarter += 1;
        }
        this.createTeam = (teamName) => {
          let team = new Team(teamName);
          this.teams.push(team);
        }

        for(let i = 0; i < teamCount; i++) {
          this.createTeam(`team ${i + 1}`);        
        }
      }
    }

    class Team {
      constructor(name) {
        this.score = 0;
        this.name = name;
        this.updateScore = (val) => {
          this.score += val;
        }
        this.updatedName = "";
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

    $scope.currGame = new Game(2);
    console.log($scope.currGame);
  });

