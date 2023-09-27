package main

import (
	"context"
	"fmt"

	"github.com/wailsapp/wails/v2/pkg/menu"
	"github.com/wailsapp/wails/v2/pkg/menu/keys"
	wailsruntime "github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) menu() *menu.Menu {
	return &menu.Menu{
		Items: []*menu.MenuItem{
			{
				Label: "GoWG", Role: menu.AppMenuRole,
				SubMenu: &menu.Menu{
					Items: []*menu.MenuItem{
						{Label: "GoWG について", Click: func(cd *menu.CallbackData) { wailsruntime.EventsEmit(a.ctx, string(ShowAbout)) }},
						{Label: "終了する", Accelerator: keys.CmdOrCtrl("q"), Click: func(cd *menu.CallbackData) { wailsruntime.Quit(a.ctx) }},
					},
				},
			},
			menu.EditMenu(),
			menu.WindowMenu(),
		},
	}
}

type Channels string

const (
	ShowAbout = Channels("showAbout")
)

func (a *App) ChannelsShowAbout() Channels {
	return ShowAbout
}
