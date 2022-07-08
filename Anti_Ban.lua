	repeat wait() until game:IsLoaded()
	
	--{Services
	local Players = game:GetService("Players")
	--}
	
	--{Vars 
	local LocalPlayer = Players.LocalPlayer
	--}
	
	
	local function CheckRank()
		do 
			for _,v in pairs(Players:GetChildren()) do 
				if v~= LocalPlayer and v:IsInGroup(game.CreatorId) then 
					local Rank = v:GetRoleInGroup(game.CreatorId)
					local CheckRank = v:GetRankInGroup(game.CreatorId)
					if _G.Settings.CheckRole then 
						if table.find(_G.Settings.CheckRoles, Rank)  then 
						   LocalPlayer:Kick(v.Name .. " is in the game | Rank: " .. Rank .. " | Anti-Ban Check Roles")
					   end
					end
					if CheckRank >= _G.Settings.Rank then 
						LocalPlayer:Kick(v.Name .. " is in the game | Rank: " .. Rank .. " | Anti-Ban Rank")
					end
				end
			end
		end
	end
	
	Players.PlayerAdded:Connect(function(player)
		if player:IsInGroup(game.CreatorId) then
			local Rank = v:GetRoleInGroup(game.CreatorId)
			local CheckRank = v:GetRankInGroup(game.CreatorId)
			if _G.Settings.CheckRole then 
			   if table.find(_G.Settings.CheckRoles, Rank)  then 
				  LocalPlayer:Kick(player.Name .. " is in the game | Rank: " .. Rank .. " | Anti-Ban Check-Roles")
				end
			end
			if CheckRank > _G.Settings.Rank then 
			   LocalPlayer:Kick(player.Name .. "has joined the game | Rank: " .. Rank .. " Anti-Ban Rank")
			end
		end
	end)
	
	
	CheckRank()



		


