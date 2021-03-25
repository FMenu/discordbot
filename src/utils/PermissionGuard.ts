import { PermissionString } from "discord.js"

export default class PermissionGuard {

  constructor(private permissions?: Array<PermissionString>) {}

  getPermissions(): Array<string> | undefined { return this.permissions }

  check(memberPermissions?: Array<PermissionString>): boolean | undefined {
    return this.permissions?.every(permission => memberPermissions?.includes(permission))
  }
  
}