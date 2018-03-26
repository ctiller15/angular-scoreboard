angular
  .module("mainGame", [])
  .controller("playerController", ($scope) => {

    class Game {
      constructor(teamCount) {

        this.teams = [];
        this.quarter = 1;

        this.updateQuarter = () => {
          this.quarter += 1;
          for(let i = 0; i < this.teams.length; i++) {
            this.teams[i].resetScore();
          }
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

        this.resetScore = () => {
          this.score = 0;
        }

        this.updatedName = "";

        this.updateName = (name) => {
          this.name = name;
        }
      }
    }

    $scope.currGame = new Game(2);
    console.log($scope.currGame);
  });

